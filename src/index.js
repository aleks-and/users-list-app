import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

import 'bulma/css/bulma.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/users-list-app">
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
