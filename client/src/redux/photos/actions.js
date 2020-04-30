import { GET_PHOTO, SUBMIT_PHOTOS, GET_ALL } from './reducer';

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
  })
};