import { all } from 'redux-saga/effects';
import photosSaga from './photos/saga';

export default function* rootSaga() {
  yield all([
    photosSaga()
  ])
}