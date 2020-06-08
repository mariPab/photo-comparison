import React from 'react';
import { shallow } from 'enzyme';
import { EditFormComponent } from '.';

const mockProps = {
  editComparison: jest.fn(),
  getPhotoData: jest.fn(),
  photoData: {
    title: 'title',
    description: 'description',
    width: 425,
    height: 356,
    images: {
      before: 'before.jpg',
      after: 'after.jpg'
    },
  },
};

describe('Component EditForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<EditFormComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
