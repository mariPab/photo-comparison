import {
  EXECUTE_ERROR_CODE,
  EXECUTE_ACTION_CODE,
  ExecuteErrorCode,
  ExecuteActionCode
} from './types';
import { all, fork, takeEvery } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import { actionCodes, errorCodes } from '../../settings/codes';

export function* executeErrorCodeWatcher(): Generator {
  yield takeEvery(EXECUTE_ERROR_CODE, executeErrorCode);
}
export function* executeErrorCode({ payload }: ExecuteErrorCode) {
  const { code } = payload;
  switch (code) {
    case (errorCodes.NO_RECORD):
      yield NotificationManager.error('Nie znaleziono takiego wpisu');
      break;
    default:
      yield NotificationManager.error('Wystapił nieznany błąd');
  }
}

export function* executeActionCodeWatcher(): Generator {
  yield takeEvery(EXECUTE_ACTION_CODE, executeActionCode);
}
export function* executeActionCode({ payload }: ExecuteActionCode) {
  const { code } = payload;
  switch (code) {
    case (actionCodes.DOC_DELETED_SUCCESSFULLY):
      yield NotificationManager.success('Dane zostały usunięte poprawnie');
      break;
    case (actionCodes.DOC_SUBMITTED_SUCCESSFULLY):
      yield NotificationManager.success('Dane zostały dodane poprawnie');
      break;
    case (actionCodes.DOC_UPDATED_SUCCESSFULLY):
      yield NotificationManager.success('Dane zostały zaktualizowane');
      break;
    default:
      break;
  }
}

export default function* rootSaga(): Generator {
  yield all([
    fork(executeErrorCodeWatcher),
    fork(executeActionCodeWatcher),
  ]);
}