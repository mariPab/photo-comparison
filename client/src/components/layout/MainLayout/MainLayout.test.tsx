import React from 'react';
import { shallow } from 'enzyme';
import { MainLayoutComponent } from '.';

describe('MainLayout pure component', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <MainLayoutComponent>
        <div></div>
      </MainLayoutComponent>);
    expect(component).toBeTruthy();
  });
});
