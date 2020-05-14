import { PhotoState, SET_ALL, SET_PHOTO, PhotosReducerTypes } from './types';
import { PhotoInterface } from '../../interfaces/photos';

/* selectors */
export const getPhoto = ({ photoData }: PhotoState): PhotoInterface => photoData;
export const getList = ({ allPhotos }: PhotoState): Array<PhotoInterface> => allPhotos;
export const getPhotoById = ({ allPhotos }: PhotoState, photoId: string): PhotoInterface => {
  const filteredPost = allPhotos.filter((photoData: PhotoInterface) => photoData._id === photoId);
  return filteredPost[0];
};

const initialState: PhotoState = {
  photoData: {
    _id: '',
    title: '',
    description: '',
    dimensions: {
      width: 0,
      height: 0,
    },
    images: {
      before: '',
      after: '',
    },
  },
  allPhotos: [],
};

export default function reducer(
  statePart: PhotoState = initialState,
  action: PhotosReducerTypes) {
  switch (action.type) {
    case SET_PHOTO:
      return {
        ...statePart,
        photoData: action.payload,
      };
    case SET_ALL:
      console.log(action.payload);
      return {
        ...statePart,
        allPhotos: action.payload,
      };
    default:
      return statePart;
  }
}