/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route } from 'react-router';
import RedirectIf from './components/RedirectIf';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import AuthContainer from './containers/AuthContainer';
import DashboardContainer from './containers/DashboardContainer';
import MoneyMaidContainer from './containers/MoneyMaidContainer';
import '../stylesheets/main.scss';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <RedirectIf condition={store.getState().AppReducer.get('userLoggedIn')} from="/" to="/dashboard">
          <Route exact path="/" component={MoneyMaidContainer} />
        </RedirectIf>
        <RedirectIf condition={store.getState().AppReducer.get('userLoggedIn')} from="/auth" to="/dashboard">
          <Route path="/auth" component={AuthContainer} />
        </RedirectIf>
        <Route path="/dashboard" component={DashboardContainer}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
