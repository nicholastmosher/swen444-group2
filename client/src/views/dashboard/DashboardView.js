/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import InitialDashboardView from './InitialDashboardView';
import NormalDashboardView from './NormalDashboardView';

const DashboardView = (props) => (
  <div>
    {
      props.isInitialPage ?
      (<InitialDashboardView />):
      (<NormalDashboardView />)
    }
  </div>
);

const mapStateToProps = ({BudgetReducer}) => ({
  isInitialPage: !BudgetReducer.has('transactions'),
});

export default connect(mapStateToProps)(DashboardView);
