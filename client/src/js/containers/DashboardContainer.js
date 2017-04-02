/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { Route } from 'react-router';
import NavigationView from '../views/dashboard/NavigationView';
import DashboardView from '../views/dashboard/DashboardView';
import TransactionView from '../views/dashboard/TransactionView';
import GraphsView from '../views/dashboard/GraphsView';
import CollaboratorsView from '../views/dashboard/CollaboratorsView';

const DashboardContainer = (props) => (
  <div>
    <NavigationView />
    <Route exact path={props.match.url} component={DashboardView} />
    <Route path={props.match.url + "/transactions"} component={TransactionView}/>
    <Route path={props.match.url + "/graphs"} component={GraphsView}/>
    <Route path={props.match.url + "/collaborators"} component={CollaboratorsView}/>

    <h1> this is a very nice cool header </h1>
  </div>
);

export default DashboardContainer;