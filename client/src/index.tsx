import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MAIN_PAGE_URL } from './config';

import App from './App';

const Root: FunctionComponent = () => (
  <Provider store={store} >
    <Router basename={`${MAIN_PAGE_URL}`} >
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));