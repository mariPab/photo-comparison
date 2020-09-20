import React from 'react';
import { shallow } from 'enzyme';
import { AdminComponent } from '.';
import { mockedPhotoData } from '../../../../__mocks__/photoData';

const mockProps = {
  photosList: [mockedPhotoData, mockedPhotoData],
  getAllPhotos: jest.fn(),
};

describe('Admin pure component', () => {
  it('should render without crashing', () => {
    const component = shallow(<AdminComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});

