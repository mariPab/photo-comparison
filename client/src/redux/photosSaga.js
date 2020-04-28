import { GET_PHOTO } from './photosReducer';
import axios from 'axios';
import { API_URL } from '../config';
import { all, fork, takeEvery, put, call } from 'redux-saga/effects';


/* Saga creator */
export function* getPhotoDataWatcher() {
  yield takeEvery(GET_PHOTO, getPhotoData)
}
export function* getPhotoData({ payload }) {
  const { id } = payload;
  try {
    const res = yield axios.get(`${API_URL}/photos/${id}`);
    console.log(res);
    if (res && res.data) {
      console.log(res.data);
      yield put({ type: GET_PHOTO, data: res.data });
    }
  }
  catch (err) {
    yield put(err)
  }
};

export default function* rootSaga() {
  yield all([
    fork(getPhotoDataWatcher),
  ]);
}