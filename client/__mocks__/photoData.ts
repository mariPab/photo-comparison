export const mockedPhotoData = {
  _id: '635736yb4574',
  title: 'title',
  description: 'description',
  dimensions: {
    width: 425,
    height: 356,
  },
  images: {
    before: 'before.jpg',
    after: 'after.jpg',
  },
};

export const mockedHOCFunctions = {
  updateInputValue: jest.fn(),
  convertToFormData: jest.fn(),
  setImage: jest.fn(),
  formFillData: {
    title: 'title',
    description: 'description',
    width: 425,
    height: 356,
    before: 'before.jpg',
    after: 'after.jpg',
  },
  handleError: jest.fn(),
  updateFormFill: jest.fn(),
};