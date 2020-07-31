import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import promisse from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import './index.css';

import reducers from './store';
import App from './main/app';

const store = applyMiddleware(multi, thunk, promisse)(createStore)(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);