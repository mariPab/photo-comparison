import React from 'react';
import { shallow } from 'enzyme';
import { AdminComponent } from '.';

const mockPhotoData = {
  _id: '635736yb4574',
  title: 'title',
  description: 'description',
  dimensions: {
    width: 425,
    height: 356,
  },
  images: {
    before: 'before.jpg',
    after: 'after.jpg'
  },
};

const mockProps = {
  photosList: [mockPhotoData, mockPhotoData],
  getAllPhotos: jest.fn(),
};

describe('Admin pure component', () => {
  it('should render without crashing', () => {
    const component = shallow(<AdminComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});

