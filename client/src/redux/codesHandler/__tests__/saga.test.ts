import sagaHelper from 'redux-saga-testing';
import {
  executeActionCode,
  executeErrorCode,
} from '../saga';
import {
  EXECUTE_ERROR_CODE,
  EXECUTE_ACTION_CODE,
} from '../types';
import { put } from 'redux-saga/effects';
import { actionCodes } from '../../../settings/codes';
import { NotificationManager } from 'react-notifications';

describe('codesHandler Saga - ', () => {
  describe('executeActionCode', () => {
    describe('DOC_DELETED_SUCCESSFULLY', () => {
      const mockPayload = { code: actionCodes.DOC_DELETED_SUCCESSFULLY };
      const it = sagaHelper(executeActionCode({ type: EXECUTE_ACTION_CODE, payload: mockPayload }));
      it('should trigger success NotificationManager', result => {
        expect(result).toEqual(NotificationManager.success('Dane zostały usunięte poprawnie'));
      });
      it('and then nothing', result => {
        expect(result).toBeUndefined();
      });
    });
    describe('DOC_SUBMITTED_SUCCESSFULLY', () => {
      const mockPayload = { code: actionCodes.DOC_SUBMITTED_SUCCESSFULLY };
      const it = sagaHelper(executeActionCode({ type: EXECUTE_ACTION_CODE, payload: mockPayload }));
      it('should trigger success NotificationManager', result => {
        expect(result).toEqual(NotificationManager.success('Dane zostały dodane poprawnie'));
      });
      it('and then nothing', result => {
        expect(result).toBeUndefined();
      });
    });
    describe('DOC_UPDATED_SUCCESSFULLY', () => {
      const mockPayload = { code: actionCodes.DOC_UPDATED_SUCCESSFULLY };
      const it = sagaHelper(executeActionCode({ type: EXECUTE_ACTION_CODE, payload: mockPayload }));
      it('should trigger success NotificationManager', result => {
        expect(result).toEqual(NotificationManager.success('Dane zostały zaktualizowane'));
      });
      it('and then nothing', result => {
        expect(result).toBeUndefined();
      });
    });
  });

});