import { PhotoData } from './global';

export interface Image {
  filename: string;
  contentType: string;
  data: string;
}
export interface Images<T> {
  before: T | null;
  after: T | null;
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
  images: Images<Image>;
}

export type FormFillData = PhotoData & BasicPhotoData & Images<Blob> & Dimensions;

export interface FormState {
  formFillData: FormFillData;
  isError: boolean;
}




