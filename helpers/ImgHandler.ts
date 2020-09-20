import fs = require('fs');
import { ImageData } from '../models/photo.model';

type BuffImg = ImageData<Buffer>;
type DecodedImg = ImageData<string>;

interface DecodedImagesData {
  before: DecodedImg;
  after: DecodedImg;
}
type EncodeImage = (image: Express.Multer.File) => BuffImg;
type DecodeImage = (image: ArrayBuffer) => string;
type SaveInRawFormat = (image: BuffImg) => void;
type BuildObject = (image: BuffImg) => DecodedImg;
type ReturnDecodedObject = (before: BuffImg, after: BuffImg) => DecodedImagesData;
type DeleteImageFromDir = (filename: string) => void;

class ImgHandler {
  public encodeImage: EncodeImage = image => {
    const img = fs.readFileSync(image.path);
    const encoded = img.toString('base64');
    return {
      filename: image.path.split('\\').slice(-1)[0],
      contentType: image.mimetype,
      data: Buffer.from(encoded, 'base64'),
    };
  }
  public decodeImage: DecodeImage = image => {
    const encryptetBytes = Buffer.from(image);
    return encryptetBytes.toString('base64');
  }
  public saveInRawFormat: SaveInRawFormat = image => {
    fs.writeFileSync(`public/images/${image.filename}`, image.data);
  }
  public buildObject: BuildObject = image => {
    this.saveInRawFormat(image);
    return {
      filename: image.filename,
      contentType: image.contentType,
      data: this.decodeImage(image.data),
    };
  }
  public returnDecodedImages: ReturnDecodedObject = (before, after) => {
    return {
      before: this.buildObject(before),
      after: this.buildObject(after),
    };
  }
  public deleteImageFromDir: DeleteImageFromDir = filename => {
    fs.unlink(`public/images/${filename}`, err => {
      if (err) throw err;
    });
  }
}

export default new ImgHandler();