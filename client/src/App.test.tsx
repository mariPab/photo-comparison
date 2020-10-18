import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import MainLayout from './components/layout/MainLayout';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/views/Homepage';
import Photo from './components/views/Photo';
import Admin from './components/views/Admin';
import Submit from './components/features/Submit';
import EditForm from './components/features/EditForm';
import NotFound from './components/views/NotFound';

describe('App', () => {
  let component: ShallowWrapper<{}>
  beforeEach(() => {
    component = shallow(
      <App />
    );
  });
  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });
  it('should render MainLayout', () => {
    expect(component.find(MainLayout)).toHaveLength(1);
  });
  it('should render Switch', () => {
    expect(component.find(Switch)).toHaveLength(1);
  });
  it('should render Route components', () => {
    expect(component.find(Route).length).toBe(6);
  });
  it('Route to Homepage', () => {
    const homepage = component.find(Route).at(0);
    expect(homepage.prop('path')).toEqual('/');
    expect(homepage.prop('component')).toEqual(Homepage);
  });
  it('Route to Photo', () => {
    const photo = component.find(Route).at(1);
    expect(photo.prop('path')).toEqual('/photos/:id');
    expect(photo.prop('component')).toEqual(Photo);
  });
  it('Route to Admin', () => {
    const admin = component.find(Route).at(2);
    expect(admin.prop('path')).toEqual('/admin');
    expect(admin.prop('component')).toEqual(Admin);
  });
  it('Route to Submit', () => {
    const submit = component.find(Route).at(3);
    expect(submit.prop('path')).toEqual('/admin/submit');
    expect(submit.prop('component')).toEqual(Submit);
  });
  it('Route to EditForm', () => {
    const editForm = component.find(Route).at(4);
    expect(editForm.prop('path')).toEqual('/admin/edit/:id');
    expect(editForm.prop('component')).toEqual(EditForm);
  });
  it('Route to NotFound', () => {
    const notFound = component.find(Route).at(5);
    expect(notFound.prop('path')).toEqual('*');
    expect(notFound.prop('component')).toEqual(NotFound);
  });
});

