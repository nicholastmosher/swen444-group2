/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { Route } from 'react-router';
import NavigationView from "../views/dashboard/NavigationView";
import TransactionView from '../views/dashboard/TransactionView';
import GraphsView from '../views/dashboard/GraphsView';
import CollaboratorsView from '../views/dashboard/CollaboratorsView';

const DashboardContainer = (props) => (
  <div>
    <NavigationView />
    <Route path={props.match.url + "/:planId/transactions"} component={TransactionView}/>
    <Route path={props.match.url + "/:planId/graphs"} component={GraphsView}/>
    <Route path={props.match.url + "/:planId/collaborators"} component={CollaboratorsView}/>
  </div>
);

export default DashboardContainer;
