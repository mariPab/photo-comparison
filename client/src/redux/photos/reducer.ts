import {
  PhotoState,
  GET_ALL_SUCCESS,
  GET_ALL_FAIL,
  GET_ALL,
  GET_PHOTO,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
  PhotosReducerTypes,
} from './types';
import { PhotoInterface } from '../../interfaces/photos';

/* selectors */
export const getPhoto = ({ photoData }: PhotoState): PhotoInterface => photoData;
export const getList = ({ allPhotos }: PhotoState): Array<PhotoInterface> => allPhotos;

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
      before: null,
      after: null,
    },
  },
  loading: false,
  error: false,
  allPhotos: [],
};

export default function reducer(
  statePart: PhotoState = initialState,
  action: PhotosReducerTypes) {
  switch (action.type) {
    case GET_PHOTO: {
      return {
        ...statePart,
        loading: true,
      }
    }
    case GET_PHOTO_SUCCESS:
      return {
        ...statePart,
        photoData: action.payload,
        loading: false,
      };
    case GET_PHOTO_FAIL:
      return {
        ...statePart,
        error: true,
        loading: false,
      };
    case GET_ALL: {
      return {
        ...statePart,
        loading: true,
      }
    }
    case GET_ALL_SUCCESS:
      return {
        ...statePart,
        allPhotos: action.payload,
        loading: false,
      };
    case GET_ALL_FAIL:
      return {
        ...statePart,
        error: true,
        loading: false,
      };
    default:
      return statePart;
  }
}