import { BasicObject, StringObject } from '../interfaces/global';

export const convertValuesToString = (obj: BasicObject): StringObject => {
  const stringObj: StringObject = {};
  Object.keys(obj).forEach(key => {
    // stringObj[key] = obj[key].toString();
    // return stringObj;
    // }
    stringObj[key] = '' + obj[key];
  });
  return stringObj;
};