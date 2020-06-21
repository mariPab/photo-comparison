import { PhotoInterface } from '../../interfaces/photos';

export const GET_PHOTO = 'GET_PHOTO';
// export const READ_BINARY_DATA: string = 'READ_BINARY_DATA';
export const SET_PHOTO = 'SET_PHOTO';
export const GET_ALL = 'GET_ALL';
export const SET_ALL = 'SET_ALL';
export const SUBMIT_PHOTOS = 'SUBMIT_PHOTOS';
export const EDIT_COMPARISON = 'EDIT_COMPARISON';
export const DELETE_COMPARISON = 'DELETE_COMPARISON';

export interface PhotoState {
  photoData: PhotoInterface;
  allPhotos: PhotoInterface[];
}
export interface GetPhotosList {
  type: typeof GET_ALL;
}
// export interface ReadPhotoData {
//   type: typeof READ_BINARY_DATA;
//   payload: {
//     data: PhotoInterface
//   }
// }
export interface SetList {
  type: typeof SET_ALL;
  payload: PhotoInterface;
}
export interface GetPhotoData {
  type: typeof GET_PHOTO;
  payload: {
    id: string;
  };
}
export interface SetPhotoData {
  type: typeof SET_PHOTO;
  payload: PhotoInterface;
}

export interface SubmitPhoto {
  type: typeof SUBMIT_PHOTOS;
  payload: {
    data: globalThis.FormData;
  };
}
export interface EditComparison {
  type: typeof EDIT_COMPARISON;
  payload: {
    id: string;
    data: globalThis.FormData;
  };
}
export interface DeleteComparison {
  type: typeof DELETE_COMPARISON;
  payload: {
    id: string;
  };
}

export type PhotosReducerTypes = SetList | SetPhotoData;