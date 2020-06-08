import React from 'react';
import { shallow } from 'enzyme';
import { ButtonComponent } from '.';

describe('Component Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<ButtonComponent />);
    expect(component).toBeTruthy();
  });
});
