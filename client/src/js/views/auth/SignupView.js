/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Map } from 'immutable';

class SignupView extends Component {
  constructor() {
    super();
    this.state = Map({
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    });
  }

  handleFirstName(event) {
    this.state.set('firstName', event.target.value);
  }

  handleLastName(event) {
    this.state.set('lastName', event.target.value);
  }

  handleEmail(event) {
    this.state.set('email', event.target.value);
  }

  handleConfirmEmail(event) {
    this.state.set('confirmEmail', event.target.value);
  }

  handlePassword(event) {
    this.state.set('password', event.target.value);
  }

  handleConfirmPassword(event) {
    this.state.set('confirmPassword', event.target.value);
  }

  render() {
    return (
      <div className="budget-auth-signup">
        <h1>Signup</h1>
        <div className="form-group row">
          <label htmlFor="loginFirstName" className="col-4 col-form-label">First Name</label>
          <div className="col-7">
            <input id="loginFirstName"
                   className="form-control"
                   type="text"
                   value={this.state.get('firstName')}
                   onChange={this.handleFirstName} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="loginLastName" className="col-4 col-form-label">Last Name</label>
          <div className="col-7">
            <input id="loginLastName"
                   className="form-control"
                   type="text"
                   value={this.state.get('lastName')}
                   onChange={this.handleLastName} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="loginEmail" className="col-4 col-form-label">Email</label>
          <div className="col-7">
            <input id="loginEmail"
                   className="form-control"
                   type="text"
                   value={this.state.get('email')}
                   onChange={this.handleEmail} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="loginConfirmEmail" className="col-4 col-form-label">Confirm Email</label>
          <div className="col-7">
            <input id="loginConfirmEmail"
                   className="form-control"
                   type="text"
                   value={this.state.get('confirmEmail')}
                   onChange={this.handleConfirmEmail} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="loginPassword" className="col-4 col-form-label">Password</label>
          <div className="col-7">
            <input id="loginPassword"
                   className="form-control"
                   type="password"
                   value={this.state.get('password')}
                   onChange={this.handlePassword} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="loginConfirmPassword" className="col-4 col-form-label">Confirm Password</label>
          <div className="col-7">
            <input id="loginConfirmPassword"
                   className="form-control"
                   type="password"
                   value={this.state.get('confirmPassword')}
                   onChange={this.handleConfirmPassword} />
          </div>
        </div>
        <button className="signup-button button-round"
                onClick={() => this.props.push()}>Create Account</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  push: () => dispatch(push('/dashboard')),
});

export default connect(state => state, mapDispatchToProps)(SignupView);
