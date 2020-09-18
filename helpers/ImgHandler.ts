import fs = require('fs');
import { Image, DecodedImage } from '../models/photo.model';

interface DecodedImagesData {
  images: {
    before: DecodedImage;
    after: DecodedImage;
  }
}
type EncodeImage = (image: Express.Multer.File) => Image;
type DecodeImage = (image: ArrayBuffer) => string;
type ReturnDecodedObject = (before: Image, after: Image) => DecodedImagesData;

class ImgHandler {
  public encodeImage: EncodeImage = image => {
    const img = fs.readFileSync(image.path);
    const encoded = img.toString('base64');
    return {
      contentType: image.mimetype,
      data: new Buffer(encoded, 'base64'),
    };
  }
  public decodeImage: DecodeImage = image => {
    const encryptetBytes = Buffer.from(image);
    return encryptetBytes.toString('base64');
  }
  public returnDecodedObject: ReturnDecodedObject = (before, after) => {
    const decodedBefore = this.decodeImage(before.data);
    const decodedAfter = this.decodeImage(after.data);
    return {
      images: {
        before: {
          contentType: before.contentType,
          data: decodedBefore,
        },
        after: {
          contentType: after.contentType,
          data: decodedAfter,
        },
      },
    };
  }
}

export default new ImgHandler();