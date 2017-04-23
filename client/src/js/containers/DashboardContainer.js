/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import RedirectIf from '../components/RedirectIf';
import { Route } from 'react-router';
import NavigationView from '../views/dashboard/NavigationView';
import DashboardView from '../views/dashboard/DashboardView';
import TransactionView from '../views/dashboard/TransactionView';
import GraphsView from '../views/dashboard/GraphsView';
import CollaboratorsView from '../views/dashboard/CollaboratorsView';

const DashboardContainer = (props) => (
  <RedirectIf condition={!props.loggedIn} from="/dashboard" to="/auth">
    <div>
      <NavigationView />
      <Route exact path={props.match.url} component={DashboardView} />
      <Route path={props.match.url + "/transactions"} component={TransactionView}/>
      <Route path={props.match.url + "/graphs"} component={GraphsView}/>
      <Route path={props.match.url + "/collaborators"} component={CollaboratorsView}/>
    </div>
  </RedirectIf>
);

const mapStateToProps = ({AppReducer}) => ({
  loggedIn: AppReducer.get('userLoggedIn'),
});

export default connect(mapStateToProps)(DashboardContainer);
