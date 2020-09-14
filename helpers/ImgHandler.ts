import fs = require('fs');
import { Image } from '../models/photo.model';

type EncodeImage = (image: Express.Multer.File) => Image;

class ImgHandler {
  public encodeImage: EncodeImage = image => {
    const img = fs.readFileSync(image.path);
    const encoded = img.toString('base64');
    return {
      contentType: image.mimetype,
      data: new Buffer(encoded, 'base64'),
    };
  }
  public decodeImage = () => {

  }
}

export default new ImgHandler();