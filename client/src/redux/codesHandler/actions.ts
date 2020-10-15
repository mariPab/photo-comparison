import {
  EXECUTE_ERROR_CODE,
  EXECUTE_ACTION_CODE,
  ExecuteErrorCode,
  ExecuteActionCode,
} from './types';

const codesHandlerActions = {
  executeErrorCode: (code: number): ExecuteErrorCode => ({
    type: EXECUTE_ERROR_CODE,
    payload: { code },
  }),
  executeActionCode: (code: number): ExecuteActionCode => ({
    type: EXECUTE_ACTION_CODE,
    payload: { code },
  }),
};

export default codesHandlerActions;