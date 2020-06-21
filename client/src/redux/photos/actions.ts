import {
  GET_PHOTO,
  SUBMIT_PHOTOS,
  GET_ALL,
  EDIT_COMPARISON,
  DELETE_COMPARISON,
  GetPhotosList,
  GetPhotoData,
  SubmitPhoto,
  EditComparison,
  DeleteComparison,
} from './types';

export const PhotoActions = {
  getAllPhotos: (): GetPhotosList => ({
    type: GET_ALL,
  }),
  getPhotoData: (id: string): GetPhotoData => ({
    type: GET_PHOTO,
    payload: { id },
  }),
  submitPhotos: (data: globalThis.FormData): SubmitPhoto => ({
    type: SUBMIT_PHOTOS,
    payload: { data },
  }),
  editComparison: (id: string, data: globalThis.FormData): EditComparison => ({
    type: EDIT_COMPARISON,
    payload: { id, data },
  }),
  deleteComparison: (id: string): DeleteComparison => ({
    type: DELETE_COMPARISON,
    payload: { id },
  }),
};