interface Codes {
  [key: string]: number;
}
export const errorCodes: Codes = {
  /* DB ERRORS */
  NO_RECORD: 1401,
  TITLE_TOO_SHORT: 1402,
  DESCRIPTION_TOO_SHORT: 1403,
  WIDTH_CANNOT_BE_ZERO: 1404,
  HEIGHT_CANNOT_BE_ZERO: 1405,
  MISSING_IMAGE: 1406,
};

export const actionCodes: Codes = {
  DOC_DELETED_SUCCESSFULLY: 2101,
};