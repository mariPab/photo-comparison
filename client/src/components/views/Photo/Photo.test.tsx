import React from 'react';
import { shallow } from 'enzyme';
import { PhotoComponent } from '.';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const history = createMemoryHistory();
const path = `/route/:id`;
const customMatch: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', '635736yb4574'),
  params: { id: '635736yb4574' }
};
const location = createLocation(customMatch.url);
const mockProps = {
  getPhotoData: jest.fn(),
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
  match: customMatch,
  history: history,
  location: location,
};
describe('Component Photo', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
