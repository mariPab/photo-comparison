import { GET_PHOTO, SUBMIT_PHOTOS } from './reducer';

/* action creator */
export const PhotoActions = {
  getPhotoData: id => ({
    type: GET_PHOTO,
    payload: { id }
  }),
  submitPhotos: data => ({
    type: SUBMIT_PHOTOS,
    payload: { data },
  })
};