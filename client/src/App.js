import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Photo } from './components/views/Photo/Photo';
import { Admin } from './components/views/Admin/Admin';
import { Submit } from './components/features/Submit/Submit';
import { MAIN_PAGE_URL } from './config';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path={`${MAIN_PAGE_URL}/photos/:id`} exact to component={Photo} />
        <Route path={`${MAIN_PAGE_URL}/admin`} exact to component={Admin} />
        <Route path={`${MAIN_PAGE_URL}/admin/submit`} exact to component={Submit} />
      </Switch>
    </MainLayout>

  );
}

export default App;
