import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { PhotoCard } from '.';
import { mockedPhotoData } from '../../../../__mocks__/photoData';
import { PhotoCardRoot, ImageWrapper, InfoWrapper } from './PhotoCard.style';
import { NavLink } from 'react-router-dom';
import { Button } from '../../UI/Button';

const mockProps = {
  deleteComparison: jest.fn(),
  photoData: mockedPhotoData,
};
describe('PhotoCard pure component', () => {
  let component: ShallowWrapper<{}>
  beforeEach(() => {
    component = shallow(<PhotoCard {...mockProps} />);
  });
  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });
  it('should render PhotoCardRoot', () => {
    expect(component.find(PhotoCardRoot).length).toBe(1);
  });
  it('should render ImageWrapper', () => {
    expect(component.find(ImageWrapper).length).toBe(1);
  });
  it('should render image', () => {
    const img = component.find('img');
    expect(img.length).toBe(1);
    expect(img.prop('src')).toEqual('data:image/jpg;base64, mockedBuff');
    expect(img.prop('alt')).toEqual('title');
  });
  it('should render InfoWrapper', () => {
    expect(component.find(InfoWrapper).length).toBe(1);
  });
  it('should render NavLink with appropriate properties', () => {
    const links = component.find(NavLink);
    expect(links.length).toBe(2);
  });
  it('should render Button with appropriate properties', () => {
    const button = component.find(Button);
    expect(button.length).toBe(1);
    expect(button.prop('variant')).toEqual('fab');
  });
  it('should call deleteComparison onClick', () => {
    const button = component.find(Button);
    button.simulate('click');
    expect(mockProps.deleteComparison).toHaveBeenCalledTimes(1);
  });
});
