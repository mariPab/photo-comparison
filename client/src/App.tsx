import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Homepage } from './components/views/Homepage';
import { Photo } from './components/views/Photo';
import { Admin } from './components/views/Admin';
import { Submit } from './components/features/Submit';
import { EditForm } from './components/features/EditForm';
import { NotFound } from './components/views/NotFound';

function App(): JSX.Element {
  return (
    <MainLayout>
      <Switch>
        <Route path={`/`} exact to component={Homepage} />
        <Route path={`/photos/:id`} exact to component={Photo} />
        <Route path={`/admin`} exact to component={Admin} />
        <Route path={`/admin/submit`} exact to component={Submit} />
        <Route path={`/admin/edit/:id`} exact to component={EditForm} />
        <Route path='*' component={NotFound} />
      </Switch>
    </MainLayout>
  );
}
export default App;
