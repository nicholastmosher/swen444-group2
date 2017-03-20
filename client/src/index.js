/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './stylesheets/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
