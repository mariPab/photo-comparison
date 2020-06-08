export interface PhotoInterface {
  _id: string,
  title: string,
  description: string,
  dimensions: {
    width: number,
    height: number,
  },
  images: {
    before: string,
    after: string,
  },
}

export interface FormState {
  photoData: {
    title: string,
    description: string,
    width: number,
    height: number,
    before: string,
    after: string,
  },
  isError: boolean,
};