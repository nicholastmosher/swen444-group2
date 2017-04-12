/**
 * @author Zachary Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { connect } from 'react-redux';
import SplashView from '../views/moneymaid/SplashView';

const MoneyMaidContainer = (props) => (
  <SplashView />
);

const mapStateToProps = (state) => ({
  title: state.BudgetReducer.get('title'),
});

export default connect(mapStateToProps)(MoneyMaidContainer);
