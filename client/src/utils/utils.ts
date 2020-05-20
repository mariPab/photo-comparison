import { PhotoData, FormData } from '../interfaces/global';

export const convertToFormData = (obj: PhotoData): FormData => {
  const stringObj: FormData = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] instanceof Blob) {
      stringObj[key] = obj[key] as Blob;
    } else {
      stringObj[key] = '' + obj[key];
    }
  });
  return stringObj;
};