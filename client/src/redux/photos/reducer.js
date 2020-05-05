/* selectors */
export const getPhoto = ({ photo }) => photo;
export const getList = ({ allPhotos }) => allPhotos;
export const getPhotoById = ({ allPhotos }, photoId) => {
  const filteredPost = allPhotos.filter(photo => photo._id === photoId);
  return filteredPost.length ? filteredPost[0] : { error: true };
};
/* action type */
export const GET_PHOTO = 'GET_PHOTO';
export const SET_PHOTO = 'SET_PHOTO';
export const GET_ALL = 'GET_ALL';
export const SET_ALL = 'SET_ALL';
export const SUBMIT_PHOTOS = 'SUBMIT_PHOTOS';
export const EDIT_COMPARISON = 'EDIT_COMPARISON';
export const DELETE_COMPARISON = 'DELETE_COMPARISON';

const initialState = {
  photo: {},
  allPhotos: [],
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SET_PHOTO:
      return {
        ...statePart,
        photo: action.payload
      }
    case SET_ALL:
      return {
        ...statePart,
        allPhotos: action.payload,
      }
    default:
      return statePart;
  }
}