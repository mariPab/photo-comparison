import { PhotoState, SET_ALL, SET_PHOTO, PhotosReducerTypes } from './types';
import { PhotoInterface } from '../../interfaces/photos';

/* selectors */
export const getPhoto = ({ photoData }: PhotoState) => photoData;
export const getList = ({ allPhotos }: PhotoState) => allPhotos;
export const getPhotoById = ({ allPhotos }: PhotoState, photoId: string) => {
  const filteredPost = allPhotos.filter((photoData: PhotoInterface) => photoData._id === photoId);
  return filteredPost.length ? filteredPost[0] : { error: true };
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
        photoData: action.payload
      }
    case SET_ALL:
      return {
        ...statePart,
        allPhotos: action.payload,
      }
    default:
      return statePart;
  }
}