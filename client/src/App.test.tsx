import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <App />
    );
    expect(component).toBeTruthy();
  });
});