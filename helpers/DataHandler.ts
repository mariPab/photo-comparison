import { BasicData, PhotoData } from '../models/photo.model';

type ReturnPhotoData = (photo: PhotoData) => BasicData;

class DataHandler {
  public returnPhotoData: ReturnPhotoData = photo => {
    return {
      _id: photo._id,
      title: photo.title,
      description: photo.description,
      dimensions: {
        width: photo.dimensions.width,
        height: photo.dimensions.height,
      },
    };
  }
}

export default new DataHandler();