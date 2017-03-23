/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import TransactionView from '../views/dashboard/TransactionView';
import GraphsView from '../views/dashboard/GraphsView';
import CollaboratorsView from '../views/dashboard/CollaboratorsView';

const DashboardContainer = (props) => (
  <div>
    <nav className="navbar budget-auth-navbar">
      <h1 className="navbar-brand mb-0">{props.plan}</h1>
    </nav>
    <Route path={props.match.url + "/:planId/transactions"} component={TransactionView}/>
    <Route path={props.match.url + "/:planId/graphs"} component={GraphsView}/>
    <Route path={props.match.url + "/:planId/collaborators"} component={CollaboratorsView}/>
  </div>
);

const mapStateToProps = (state) => ({
  plan: state.BudgetReducer.get('activePlan'),
});

export default connect(mapStateToProps)(DashboardContainer);
