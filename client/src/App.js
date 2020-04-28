import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Photo } from './components/views/Photo/Photo';
// import { Submit } from './components/views/Submit/Submit';
import { MAIN_PAGE_URL } from './config';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path={`${MAIN_PAGE_URL}/photos/:id`} exact to component={Photo} />
        {/* <Route path="/submit" exact component={Submit} /> */}
      </Switch>
    </MainLayout>

  );
}

export default App;
