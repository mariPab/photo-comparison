import React from 'react';
import { shallow } from 'enzyme';
import { PhotoCardComponent } from '.';

const mockProps = {
  deleteComparison: jest.fn(),
  photoData: {
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
  },
}
describe('PhotoCard pure component', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoCardComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
