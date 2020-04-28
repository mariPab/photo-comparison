import { all } from 'redux-saga/effects';
import photosSaga from './photosSaga';

export default function* rootSaga() {
  yield all([
    photosSaga()
  ])
}