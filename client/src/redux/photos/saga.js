import { GET_PHOTO, SET_PHOTO } from './reducer';
import axios from 'axios';
import { API_URL } from '../../config';
import { all, fork, takeEvery, put } from 'redux-saga/effects';

/* Saga creator */
export function* getPhotoDataWatcher() {
  yield takeEvery(GET_PHOTO, getPhotoData)
}
export function* getPhotoData({ payload }) {
  const { id } = payload;
  try {
    const res = yield axios.get(`${API_URL}/photos/${id}`);
    if (res && res.data) {
      yield put({ type: SET_PHOTO, payload: res.data });
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