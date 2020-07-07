import { FormFillData, PhotoInterface } from './photos';

export interface PhotoData {
  [key: string]: number | string | Blob;
}

export interface FormDataType {
  [key: string]: string | Blob;
}

export interface WithFormLogicHOC {
  updateInputValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  convertToFormData: (photoData: FormFillData) => globalThis.FormData;
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formFillData: FormFillData;
  handleError: () => void;
  updateFormFill: (data: PhotoInterface) => void;
};