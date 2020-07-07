import { PhotoData } from './global';

export interface Images {
  before: string | Blob;
  after: string | Blob;
}

export interface Dimensions {
  width: number;
  height: number;
}

interface BasicPhotoData {
  title: string;
  description: string;
}
export interface PhotoInterface extends BasicPhotoData {
  _id: string;
  dimensions: Dimensions;
  images: Images;
}

export type FormFillData = PhotoData & BasicPhotoData & Images & Dimensions;

export interface FormState {
  formFillData: FormFillData;
  isError: boolean;
}




