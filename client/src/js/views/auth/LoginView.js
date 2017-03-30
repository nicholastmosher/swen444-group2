/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { Component } from 'react';
import { Map } from 'immutable';

class LoginView extends Component {
  constructor() {
    super();
    this.state = Map({
      email: '',
      password: '',
    });
  }

  handleEmail(event) {
    this.state.set('email', event.target.value);
  }

  handlePassword(event) {
    this.state.set('password', event.target.value);
  }

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
        </div>
        <button className="login-button button-round">Login</button>
      </div>
    );
  }
}

export default LoginView;
