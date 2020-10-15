import {
  GET_PHOTO,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
  SUBMIT_PHOTOS,
  GET_ALL,
  GET_ALL_SUCCESS,
  GET_ALL_FAIL,
  EDIT_COMPARISON,
  DELETE_COMPARISON,
  REDIRECT_TO_RANDOM_PHOTO,
  GetPhotoData,
  SubmitPhoto,
  EditComparison,
  DeleteComparison,
} from './types';
import axios from 'axios';
import { API_URL } from '../../config';
import { all, fork, takeEvery, put } from 'redux-saga/effects';
import codesHandlerActions from '../codesHandler/actions';

const { executeActionCode } = codesHandlerActions;

export function* getAllWatcher(): Generator {
  yield takeEvery(GET_ALL, getAll);
}
export function* getAll() {
  try {
    const res = yield axios.get(`${API_URL}/all`);
    if (res && res.data) {
      yield put({ type: GET_ALL_SUCCESS, payload: res.data });
    }
  }
  catch (err) {
    yield put({
      type: GET_ALL_FAIL,
    })
    console.log(err);
  }
}

export function* getPhotoDataWatcher(): Generator {
  yield takeEvery(GET_PHOTO, getPhotoData);
}
export function* getPhotoData({ payload }: GetPhotoData) {
  const { id } = payload;
  try {
    const res = yield axios.get(`${API_URL}/photos/${id}`);
    if (res && res.data) {
      yield put({ type: GET_PHOTO_SUCCESS, payload: res.data });
    }
  }
  catch (err) {
    yield put({
      type: GET_PHOTO_FAIL,
    })
    console.log(err);
  }
}

export function* submitPhotosWatcher(): Generator {
  yield takeEvery(SUBMIT_PHOTOS, submitPhotos);
}
export function* submitPhotos({ payload }: SubmitPhoto) {
  const { data } = payload;
  try {
    yield axios.post(`${API_URL}/submit`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    yield put({ type: GET_ALL });
  } catch (e) {
    console.log(e);
  }
}

export function* editComparisonWatcher(): Generator {
  yield takeEvery(EDIT_COMPARISON, editComparison);
}
export function* editComparison({ payload }: EditComparison) {
  const { id, data } = payload;
  try {
    const res = yield axios.put(`${API_URL}/photos/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    yield put({ type: GET_PHOTO_SUCCESS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
}

export function* deleteComparisonWatcher(): Generator {
  yield takeEvery(DELETE_COMPARISON, deleteComparison);
}
export function* deleteComparison({ payload }: DeleteComparison): Generator {
  const { id } = payload;
  try {
    /* FIXME: any */
    const res: any = yield axios.delete(`${API_URL}/photos/${id}`);
    if (res) {
      yield put({ type: GET_ALL });
      console.log(res)
      if (res.data.actionCode) yield put(executeActionCode(res.data.actionCode));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* redirectToRandomPhotoWatcher(): Generator {
  yield takeEvery(REDIRECT_TO_RANDOM_PHOTO, redirectToRandomPhoto);
}
export function* redirectToRandomPhoto({ payload }: any): Generator {
  try {
    const response: any = yield axios.get(`${API_URL}/random`);
    const id = response.data._id;
    payload.history.push(`/photos/${id}`);
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga(): Generator {
  yield all([
    fork(getAllWatcher),
    fork(getPhotoDataWatcher),
    fork(submitPhotosWatcher),
    fork(editComparisonWatcher),
    fork(deleteComparisonWatcher),
    fork(redirectToRandomPhotoWatcher),
  ]);
}