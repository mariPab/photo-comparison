import React from 'react';
import { shallow } from 'enzyme';
import { SubmitComponent } from '.';

const mockProps = {
  submitPhotos: jest.fn()
};

describe('Component Submit', () => {
  it('should render without crashing', () => {
    const component = shallow(<SubmitComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
