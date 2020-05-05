import {
  GET_PHOTO,
  SET_PHOTO,
  SUBMIT_PHOTOS,
  GET_ALL,
  SET_ALL,
  EDIT_COMPARISON,
  DELETE_COMPARISON
} from './reducer';
import axios from 'axios';
import { API_URL } from '../../config';
import { all, fork, takeEvery, put } from 'redux-saga/effects';

/* Saga creator */
export function* getAllWatcher() {
  yield takeEvery(GET_ALL, getAll)
}
export function* getAll() {
  try {
    const res = yield axios.get(`${API_URL}/all`);
    if (res && res.data) {
      console.log(res);
      yield put({ type: SET_ALL, payload: res.data });
    }
  }
  catch (err) {
    console.log(err);
  }
};

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
    console.log(err);
  }
};

export function* submitPhotosWatcher() {
  yield takeEvery(SUBMIT_PHOTOS, submitPhotos)
}

export function* submitPhotos({ payload }) {
  const { data } = payload;
  try {
    yield axios.post(`${API_URL}/submit`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    yield put({ type: GET_ALL });
  } catch (e) {
    console.log(e);
  }
}

export function* editComparisonWatcher() {
  yield takeEvery(EDIT_COMPARISON, editComparison)
}

export function* editComparison({ payload }) {
  const { id, data } = payload;
  console.log('I want edit: ' + id);
  try {
    const res = yield axios.put(`${API_URL}/photos/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    yield put({ type: GET_PHOTO, payload: id })
  } catch (e) {
    console.log(e);
  }
}

export function* deleteComparisonWatcher() {
  yield takeEvery(DELETE_COMPARISON, deleteComparison)
}

export function* deleteComparison({ payload }) {
  const { id } = payload;
  try {
    yield axios.delete(`${API_URL}/photos/${id}`);
    yield put({ type: GET_ALL })
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([
    fork(getAllWatcher),
    fork(getPhotoDataWatcher),
    fork(submitPhotosWatcher),
    fork(editComparisonWatcher),
    fork(deleteComparisonWatcher),
  ]);
}