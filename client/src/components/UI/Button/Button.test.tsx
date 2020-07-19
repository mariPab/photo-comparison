import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button } from '.';

const mockClbck = jest.fn();

describe('Component Button', () => {
  it('without any prop should render without crashing', () => {
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
  });
  it('with "fab" variant should render without crashing', () => {
    const component = shallow(<Button variant="fab" />);
    expect(component).toBeTruthy();
  });
  describe('with onClick prop', () => {
    let component: ShallowWrapper<{}>
    beforeEach(() => {
      component = shallow(<Button onClick={mockClbck} />);
    });
    it('should render without crashing', () => {
      expect(component).toBeTruthy();
    });
    it('should call callback funtion on click', () => {
      component.simulate('click');
      expect(mockClbck).toHaveBeenCalledTimes(1);
    });
  });

});
