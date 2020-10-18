import React from 'react';
import { shallow } from 'enzyme';
import { Submit } from '.';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { mockedHOCFunctions } from '../../../../__mocks__/photoData';

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
  ...mockedHOCFunctions,
};

describe('Submit', () => {
  it('should render without crashing', () => {
    const component = shallow(<Submit {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
