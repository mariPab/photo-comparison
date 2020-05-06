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