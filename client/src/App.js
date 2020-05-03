import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Photo } from './components/views/Photo/Photo';
import { Admin } from './components/views/Admin/Admin';
import { Submit } from './components/features/Submit/Submit';
import { NotFound } from './components/views/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path={`/`} exact to component={Submit} />
        <Route path={`/photos/:id`} exact to component={Photo} />
        <Route path={`/admin`} exact to component={Admin} />
        <Route path='*' component={NotFound} />

      </Switch>
    </MainLayout>

  );
}

export default App;
