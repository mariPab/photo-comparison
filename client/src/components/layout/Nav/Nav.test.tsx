import * as React from 'react';
import { shallow } from 'enzyme';
import { NavComponent } from '.';
import { Props } from '.';

const photoData = {
  _id: '4ehs5yw3yb5y',
  title: 'photo',
  description: 'description',
  dimensions: {
    width: 468,
    height: 236,
  },
  images: {
    before: 'abc.jpg',
    after: 'cde.jpg',
  },
};

const mockProps: Props = {
  linksList: [photoData, photoData],
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

