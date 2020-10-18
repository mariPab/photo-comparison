import React from 'react';
import { shallow } from 'enzyme';
import { Admin } from '.';
import { mockedPhotoData } from '../../../../__mocks__/photoData';

const mockProps = {
  photosList: [mockedPhotoData, mockedPhotoData],
  getAllPhotos: jest.fn(),
};

describe('Admin pure component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Admin {...mockProps} />);
    expect(component).toBeTruthy();
  });
});

