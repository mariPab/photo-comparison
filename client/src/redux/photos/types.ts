import { PhotoInterface } from '../../interfaces/photos';

export const GET_PHOTO: string = 'GET_PHOTO';
export const SET_PHOTO: string = 'SET_PHOTO';
export const GET_ALL: string = 'GET_ALL';
export const SET_ALL: string = 'SET_ALL';
export const SUBMIT_PHOTOS: string = 'SUBMIT_PHOTOS';
export const EDIT_COMPARISON: string = 'EDIT_COMPARISON';
export const DELETE_COMPARISON: string = 'DELETE_COMPARISON';

export interface PhotoState {
  photoData: PhotoInterface
  allPhotos: Array<PhotoInterface>
}
interface GetPhotosList {
  type: typeof GET_ALL;
}
interface SetList {
  type: typeof SET_ALL;
  payload: PhotoInterface,
}
interface GetPhotoData {
  type: typeof GET_PHOTO,
  payload: {
    id: string,
  }
}
interface SetPhotoData {
  type: typeof SET_PHOTO,
  payload: PhotoInterface,
}

interface SubmitPhoto {
  type: typeof SUBMIT_PHOTOS,
  payload: {
    data: object, /* FormData? */
  }
}
interface EditComparison {
  type: typeof EDIT_COMPARISON,
  payload: {
    id: string,
    data: object, /* FormData? */
  }
}
interface DeleteComparison {
  type: typeof SUBMIT_PHOTOS,
  payload: {
    id: string,
  }
}
export type PhotosReducerTypes = SetList | SetPhotoData;
export type PhotosActionTypes = GetPhotosList | GetPhotoData | SubmitPhoto | EditComparison | DeleteComparison;