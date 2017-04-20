/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import RedirectIf from '../components/RedirectIf';
import { connect } from 'react-redux';
import SignupView from '../views/auth/SignupView';
import LoginView from '../views/auth/LoginView';

const AuthContainer = (props) => (
  <RedirectIf condition={props.loggedIn} from="/auth" to="/dashboard">
    <div>
      <nav className="navbar budget-auth-navbar">
        <h1 className="navbar-brand mb-0">&nbsp; {props.title}</h1>
      </nav>
      <div className="budget-auth container">
        <SignupView />
        <LoginView />
      </div>
    </div>
  </RedirectIf>
);

const mapStateToProps = ({AppReducer}) => ({
  title: AppReducer.get('title'),
  loggedIn: AppReducer.get('userLoggedIn'),
});

export default connect(mapStateToProps)(AuthContainer);
