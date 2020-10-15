import { all } from 'redux-saga/effects';
import photosSaga from './photos/saga';
import codesHandlerSaga from './codesHandler/saga';

export default function* rootSaga(): Generator {
  yield all([
    photosSaga(),
    codesHandlerSaga(),
  ]);
}