import {
  GET_PHOTO,
  SUBMIT_PHOTOS,
  GET_ALL,
  EDIT_COMPARISON,
  DELETE_COMPARISON,
  REDIRECT_TO_RANDOM_PHOTO,
  GetPhotosList,
  GetPhotoData,
  SubmitPhoto,
  EditComparison,
  DeleteComparison,
  RedirectToRandomPhoto,
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
  redirectToRandomPhoto: (history: any): RedirectToRandomPhoto => ({
    type: REDIRECT_TO_RANDOM_PHOTO,
    payload: { history },
  }),
};