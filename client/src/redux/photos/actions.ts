import {
  GET_PHOTO,
  SUBMIT_PHOTOS,
  GET_ALL,
  EDIT_COMPARISON,
  DELETE_COMPARISON,
  PhotosActionTypes,
} from './types';

/* action creator */
export const PhotoActions = {
  getAllPhotos: (): PhotosActionTypes => ({
    type: GET_ALL
  }),
  getPhotoData: (id: string): PhotosActionTypes => ({
    type: GET_PHOTO,
    payload: { id }
  }),
  submitPhotos: (data: object): PhotosActionTypes => ({
    type: SUBMIT_PHOTOS,
    payload: { data },
  }),
  editComparison: (id: string, data: object): PhotosActionTypes => ({
    type: EDIT_COMPARISON,
    payload: { id, data }
  }),
  deleteComparison: (id: string): PhotosActionTypes => ({
    type: DELETE_COMPARISON,
    payload: { id }
  })
};