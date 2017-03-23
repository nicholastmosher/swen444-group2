/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import SignupView from '../views/auth/SignupView';
import LoginView from '../views/auth/LoginView';

const AuthContainer = (props) => (
  <div>
    <nav className="navbar budget-auth-navbar">
      <h1 className="navbar-brand mb-0">{props.title}</h1>
    </nav>
    <div className="budget-auth container">
      <SignupView />
      <LoginView />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  title: state.BudgetReducer.get('title'),
});

export default connect(mapStateToProps)(AuthContainer);
