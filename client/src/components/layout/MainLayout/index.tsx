import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { LayoutContainer } from './MainLayout.style';
import 'react-notifications/lib/notifications.css';

const MainLayout: React.FunctionComponent = ({ children }) => (
  <LayoutContainer>
    <NotificationContainer />
    {children}
  </LayoutContainer>
);
export default MainLayout;
