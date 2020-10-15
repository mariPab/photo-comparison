export const EXECUTE_ERROR_CODE = 'EXECUTE_ERROR_CODE';
export const EXECUTE_ACTION_CODE = 'EXECUTE_ACTION_CODE';

export interface ExecuteErrorCode {
  type: typeof EXECUTE_ERROR_CODE;
  payload: { code: number };
}
export interface ExecuteActionCode {
  type: typeof EXECUTE_ACTION_CODE;
  payload: { code: number };
}