/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { createStore } from 'redux';
import configureStore from './store/configureStore';
import AuthContainer from './containers/AuthContainer';
import DashboardContainer from './containers/DashboardContainer';
import './stylesheets/main.scss';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Redirect from="/" to="/auth"/>
        <Route path="/auth" component={AuthContainer}/>
        <Route path="/dashboard" component={DashboardContainer}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
