import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '.';

describe('MainLayout pure component', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <MainLayout>
        <div></div>
      </MainLayout>);
    expect(component).toBeTruthy();
  });
});
