/**
 * @author Zachary Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { connect } from 'react-redux';
import SplashView from '../views/moneymaid/SplashView';

const MoneyMaidContainer = (props) => (
    <div>
      <nav className="navbar budget-auth-navbar">
        <h1 className="navbar-brand mb-0">&nbsp; {props.title}</h1>
      </nav>
      <div>
        <SplashView />
      </div>
    </div>
);

const mapStateToProps = (state) => ({
  title: state.BudgetReducer.get('title'),
});

export default connect(mapStateToProps)(MoneyMaidContainer);
