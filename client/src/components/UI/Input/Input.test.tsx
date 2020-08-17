import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Input, InputProps } from '.';
import {
  Label,
  Input as StyledInput,
} from './Input.style';

const mockProps: InputProps = {
  name: 'title',
  type: 'text',
  onChange: jest.fn(),
  value: 'abc',
};
describe('Component Input', () => {
  describe('with required props', () => {
    let component: ShallowWrapper<InputProps>
    beforeEach(() => {
      component = shallow(<Input {...mockProps} />);
    });
    it('should render without crashing', () => {
      expect(component).toBeTruthy();
    });
    it('should render Label', () => {
      expect(component.find(Label).length).toBe(1);
    });
    it('should render Input', () => {
      expect(component.find(StyledInput).length).toBe(1);
    });
    it('should contain "title" as Label inner text', () => {
      expect(component.find(Label).text()).toContain('Tytuł');
    });
    it('should call onChange funtion on change', () => {
      component.find(StyledInput).simulate('change', { currentTarget: { value: 'bcd' } });
      expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    });
  });
  describe('text type', () => {
    let component: ShallowWrapper<InputProps>
    beforeEach(() => {
      component = shallow(<Input {...mockProps} />);
    });
    it('should render text input', () => {
      const input = component.find(StyledInput);
      expect(input.length).toBe(1);
    });
  });
  describe('number type', () => {
    it('should render number input', () => {
      const component: ShallowWrapper<InputProps> = shallow(
        <Input {...mockProps} type="number" value={1} />
      );
      const input = component.find(StyledInput);
      expect(input.length).toBe(1);
      expect(input.props().type).toEqual('number');
    });
  });
  describe('file type', () => {
    it('should render file input', () => {
      const component: ShallowWrapper<InputProps> = shallow(
        <Input {...mockProps} type="file" />
      );
      const input = component.find(StyledInput);
      expect(input.length).toBe(1);
      expect(input.props().type).toEqual('file');
    });
  });
  describe('with unknown type', () => {
    it('should render null', () => {
      const component: ShallowWrapper<InputProps> = shallow(
        <Input {...mockProps} type="unknown" />
      );
      const input = component.find(StyledInput);
      expect(input.length).toBe(0);
    });
  });
  describe('with flex label', () => {
    let component: ShallowWrapper<InputProps>;
    beforeEach(() => {
      component = shallow(<Input {...mockProps} name="width" />);
    });
    it('should render Label with flex property equals true', () => {
      const label = component.find(Label);
      expect(label.length).toBe(1);
      expect(label.props().flex).toBeTruthy();
    });
    it('should contain "px" as Label inner text', () => {
      expect(component.find(Label).text()).toContain('px');
    });
  });
});

