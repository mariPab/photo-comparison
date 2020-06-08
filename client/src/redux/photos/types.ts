import { PhotoInterface } from '../../interfaces/photos';
import { FormData } from '../../interfaces/global';

export const GET_PHOTO: string = 'GET_PHOTO';
// export const READ_BINARY_DATA: string = 'READ_BINARY_DATA';
export const SET_PHOTO: string = 'SET_PHOTO';
export const GET_ALL: string = 'GET_ALL';
export const SET_ALL: string = 'SET_ALL';
export const SUBMIT_PHOTOS: string = 'SUBMIT_PHOTOS';
export const EDIT_COMPARISON: string = 'EDIT_COMPARISON';
export const DELETE_COMPARISON: string = 'DELETE_COMPARISON';

export interface PhotoState {
  photoData: PhotoInterface
  allPhotos: PhotoInterface[]
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
  payload: PhotoInterface,
}
export interface GetPhotoData {
  type: typeof GET_PHOTO,
  payload: {
    id: string,
  }
}
export interface SetPhotoData {
  type: typeof SET_PHOTO,
  payload: PhotoInterface,
}

export interface SubmitPhoto {
  type: typeof SUBMIT_PHOTOS,
  payload: {
    data: globalThis.FormData,
  }
}
export interface EditComparison {
  type: typeof EDIT_COMPARISON,
  payload: {
    id: string,
    data: globalThis.FormData,
  }
}
export interface DeleteComparison {
  type: typeof DELETE_COMPARISON,
  payload: {
    id: string,
  }
}

export type PhotosReducerTypes = SetList | SetPhotoData;