import React from 'react';
import { shallow } from 'enzyme';
import { SubmitComponent } from '.';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const history = createMemoryHistory();
const path = `/route/:id`;
const customMatch: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', '635736yb4574'),
  params: { id: '635736yb4574' },
};
const location = createLocation(customMatch.url);

const mockProps = {
  submitPhotos: jest.fn(),
  match: customMatch,
  history: history,
  location: location,
};

describe('Component Submit', () => {
  it('should render without crashing', () => {
    const component = shallow(<SubmitComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
