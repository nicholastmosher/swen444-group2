/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import BudgetContainer from './containers/BudgetContainer';
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';

/**
 * URL definitions for budget application.
 */
export default (
  <Route path="/" component={BudgetContainer}>
    <IndexRedirect to="login"/>
    <Route path="login" component={LoginView}/>
    <Route path="dashboard" component={DashboardView}/>
  </Route>
);
