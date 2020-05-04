import React from 'react';
import { shallow } from 'enzyme';
import { PhotoCardComponent } from './PhotoCard';

describe('Component PhotoCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoCardComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
