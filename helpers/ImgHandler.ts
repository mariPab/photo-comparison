import fs = require('fs');
import { Image, DecodedImage } from '../models/photo.model';

interface DecodedImagesData {
  before: DecodedImage;
  after: DecodedImage;
}
type EncodeImage = (image: Express.Multer.File) => Image;
type DecodeImage = (image: ArrayBuffer) => string;
type SaveInRawFormat = (image: Image) => void;
type BuildObject = (image: Image) => DecodedImage;
type ReturnDecodedObject = (before: Image, after: Image) => DecodedImagesData;

class ImgHandler {
  public encodeImage: EncodeImage = image => {
    const img = fs.readFileSync(image.path);
    const encoded = img.toString('base64');
    return {
      filename: image.path.split('\\').slice(-1)[0],
      contentType: image.mimetype,
      data: new Buffer(encoded, 'base64'),
    };
  }
  public decodeImage: DecodeImage = image => {
    const encryptetBytes = Buffer.from(image);
    return encryptetBytes.toString('base64');
  }
  public saveInRawFormat: SaveInRawFormat = image => {
    fs.writeFileSync(image.filename, image.data);
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
}

export default new ImgHandler();