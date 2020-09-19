import { PhotoData } from './global';

export interface Image {
  filename: string;
  contentType: string;
  data: Blob;
}
export interface Images {
  before: Image | null;
  after: Image | null;
}

export interface ImagesInForm {
  before: Blob | null;
  after: Blob | null;
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

export type FormFillData = PhotoData & BasicPhotoData & ImagesInForm & Dimensions;

export interface FormState {
  formFillData: FormFillData;
  isError: boolean;
}




