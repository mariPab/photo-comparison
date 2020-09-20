import * as React from 'react';
import { shallow } from 'enzyme';
import { NavComponent } from '.';
import { Props } from '.';
import { mockedPhotoData } from '../../../../__mocks__/photoData';

const mockProps: Props = {
  linksList: [mockedPhotoData, mockedPhotoData],
};

describe('Component Nav', () => {
  describe('with required props', () => {
    it('should render without crashing', () => {
      const component = shallow(
        <NavComponent {...mockProps} />
      );
      expect(component).toBeTruthy();
    });
  });
});

