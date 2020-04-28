
/* selectors */

export const getPhoto = ({ data }) => data;

/* action type */
export const GET_PHOTO = 'GET_PHOTO';

/* action creator */
export const PhotoActions = {
  getPhotoData: id => ({
    type: GET_PHOTO,
    payload: { id }
  }),
};

const initialState = {
  data: {},
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case GET_PHOTO:
      console.log(action.data);
      return {
        ...statePart,
        data: action.data
      }
    default:
      return statePart;
  }
}