import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

describe('Component Button', () => {
  describe('without variant', () => {
    it('should render without crashing', () => {
      const component = shallow(<Button />);
      expect(component).toBeTruthy();
    });
  });
  describe('with "fab" variant', () => {
    it('should render without crashing', () => {
      const component = shallow(<Button variant="fab" />);
      expect(component).toBeTruthy();
    });
  });
});
