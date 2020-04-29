import { GET_PHOTO } from './reducer';

/* action creator */
export const PhotoActions = {
  getPhotoData: id => ({
    type: GET_PHOTO,
    payload: { id }
  }),
};