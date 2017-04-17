/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Map } from 'immutable';
import * as AppActions from '../../actions/AppActions';

class LoginView extends Component {
  constructor() {
    super();
    this.state = Map({
      email: '',
      emailValid: true,
      password: '',
      passwordValid: true,
      checkValid: false,
      validLogin: true,
    });
  };

  handleEmail = (e) => {
    const email = e.target.value;
    const valid = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/);
    this.setState(this.state.set('email', email).set('emailValid', valid));
  };

  emailFeedback = () => {
    if (this.state.get('checkValid') && !this.state.get('emailValid')) {
      return ( <div className="form-control-feedback">Invalid Email</div> );
    }
    return null;
  };

  handlePassword = (e) => {
    const pass = e.target.value;
    const valid = pass.length > 8;
    this.setState(state =>
      state.set('password', e.target.value)
                .set('passwordValid', valid)
    );
  };

  passwordFeedback = () => {
    if (this.state.get('checkValid') && !this.state.get('passwordValid')) {
      return ( <div className="form-control-feedback">Invalid Password</div> );
    }
    return null;
  };

  handleClick = () => {
    if (!this.state.get('emailValid') || !this.state.get('passwordValid')) {
      this.setState(state => state.set('checkValid', true));
      return;
    }
    if (this.props.validLogin(this.state.get('email'), this.state.get('password'))) {
      this.props.actions.logIn(this.state.get('email'), this.state.get('password'));
      return;
    }
    this.setState(state => state.set('validLogin', false));
  };

  render() {
    return (
      <div className="budget-auth-login">
        <h1>Login</h1>
        <div className="form-group row">
          <label htmlFor="loginEmail" className="col-2 col-form-label">Email</label>
          <div className="col-7">
            <input id="loginEmail"
                   className="form-control"
                   type="text"
                   value={this.state.get('email')}
                   onChange={this.handleEmail} />
          </div>
          {this.emailFeedback()}
        </div>
        <div className="form-group row">
          <label htmlFor="loginPassword" className="col-2 col-form-label">Password</label>
          <div className="col-7">
            <input id="loginPassword"
                   className="form-control"
                   type="password"
                   value={this.state.get('password')}
                   onChange={this.handlePassword} />
          </div>
          {this.passwordFeedback()}
        </div>
        <button className="login-button button-round"
                onClick={() => this.props.push}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = ({AppReducer}) => {
  const accounts = AppReducer.get('accounts');
  const users = AppReducer.get('users');
  const accountForEmail = (email) => (
    accounts.find(a => users.get(a.user).email === email)
  );
  const emailExists = (email) => (accountForEmail(email) !== null);
  const validLogin = (email, password) => {
    const account = accountForEmail(email);
    if (!account) return false;
    return account.password === password;
  };
  return {
    emailExists,
    validLogin,
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AppActions, dispatch),
  push: () => dispatch(push('/dashboard')),
});

export default connect(mapDispatchToProps)(LoginView);
