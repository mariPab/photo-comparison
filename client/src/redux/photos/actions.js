import {
  GET_PHOTO,
  SUBMIT_PHOTOS,
  GET_ALL,
  EDIT_COMPARISON,
  DELETE_COMPARISON
} from './reducer';

/* action creator */
export const PhotoActions = {
  getAllPhotos: () => ({
    type: GET_ALL
  }),
  getPhotoData: id => ({
    type: GET_PHOTO,
    payload: { id }
  }),
  submitPhotos: data => ({
    type: SUBMIT_PHOTOS,
    payload: { data },
  }),
  editComparison: (id, data) => ({
    type: EDIT_COMPARISON,
    payload: { id, data }
  }),
  deleteComparison: id => ({
    type: DELETE_COMPARISON,
    payload: { id }
  })
};