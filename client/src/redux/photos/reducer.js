/* selectors */
export const getPhoto = ({ photo }) => photo;

/* action type */
export const GET_PHOTO = 'GET_PHOTO';
export const SET_PHOTO = 'SET_PHOTO';
export const SUBMIT_PHOTOS = 'SUBMIT_PHOTOS';

const initialState = {
  photo: {},
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SET_PHOTO:
      return {
        ...statePart,
        photo: action.payload
      }
    default:
      return statePart;
  }
}