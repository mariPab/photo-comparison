import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MAIN_PAGE_URL } from './config';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <Router basename={`${MAIN_PAGE_URL}`} >
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));