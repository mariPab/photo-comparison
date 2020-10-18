import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '.';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const history = createMemoryHistory();
const path = `/random`;
const customMatch: match<{}> = {
  isExact: false,
  path,
  url: path,
  params: {},
};
const location = createLocation(customMatch.url);

const mockProps = {
  redirectToRandomPhoto: jest.fn(),
  history: history,
  location: location,
  match: customMatch,
};
describe('Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<Homepage {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
