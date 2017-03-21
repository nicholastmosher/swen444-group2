/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import AuthView from './views/login/AuthView';
import DashboardView from './views/dashboard/DashboardView';

/**
 * URL definitions for budget application.
 */
export default (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to="login"/>
    <Route path="login" component={AuthView}/>
    <Route path="dashboard" component={DashboardView}/>
  </Route>
);
