/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../actions/AppActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  failedSubmit: false,
};

class SignupView extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  reset = () => this.setState(initialState);
  check = () => this.state.failedSubmit;

  handleFirstName = (e) => this.setState({firstName: e.target.value});
  handleLastName = (e) => this.setState({lastName: e.target.value});
  handleEmail = (e) => this.setState({email: e.target.value});
  handleConfirmEmail = (e) => this.setState({confirmEmail: e.target.value});
  handlePassword = (e) => this.setState({password: e.target.value});
  handleConfirmPassword = (e) => this.setState({confirmPassword: e.target.value});

  validFirstName = () => !!this.state.firstName;
  validLastName = () => !!this.state.lastName;
  validEmail = () => this.state.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  emailMatches = () => this.state.email === this.state.confirmEmail;
  validPassword = () => !!this.state.password && this.state.password.length >= 8;
  passwordMatches = () => this.state.password === this.state.confirmPassword;

  firstNameFeedback = () => (!this.validFirstName() && this.check() ?
      <div className="form-group has-danger">
        <label className="form-control-feedback">First name is required</label>
      </div> : null
  );

  lastNameFeedback = () => (!this.validLastName() && this.check() ?
      <div className="form-group has-danger">
        <label className="form-control-feedback">Last name is required</label>
      </div> : null
  );

  emailFeedback = () => (!this.validEmail() && this.check() ?
    <div className="form-group has-danger">
      <label className="form-control-feedback">Invalid email</label>
    </div> : null
  );

  emailMatchFeedback = () => (!this.emailMatches() && this.check() ?
    <div className="form-group has-danger">
      <label className="form-control-feedback">Email doesn't match</label>
    </div> : null
  );

  passwordFeedback = () => (!this.validPassword() && this.check() ?
      <div className="form-group has-danger">
        <label className="form-control-feedback">Password must be at least 8 characters</label>
      </div> : null
  );

  passwordMatchFeedback = () => (!this.passwordMatches() && this.check() ?
      <div className="form-group has-danger">
        <label className="form-control-feedback">Password doesn't match</label>
      </div> : null
  );

  handleSubmit = () => {
    if (!this.validFirstName() ||
        !this.validLastName() ||
        !this.validEmail() ||
        !this.emailMatches() ||
        !this.validPassword() ||
        !this.passwordMatches()) {
      this.setState({failedSubmit: true});
      return;
    }
    this.props.createAccount(this.state.firstName,
                             this.state.lastName,
                             this.state.email,
                             this.state.password);
    this.reset();
  };

  render() {
    return (
      <div className="budget-auth-signup">
        <h1>Signup</h1>
        <div className="form-group row">
          <label htmlFor="loginFirstName" className="col-4 col-form-label"><span className="required">* </span>First Name</label>
          <div className="col-7">
            <input id="loginFirstName"
                   className="form-control"
                   type="text"
                   value={this.state.firstName}
                   onChange={this.handleFirstName} />
          </div>
          {this.firstNameFeedback()}
        </div>
        <div className="form-group row">
          <label htmlFor="loginLastName" className="col-4 col-form-label"><span className="required">* </span>Last Name</label>
          <div className="col-7">
            <input id="loginLastName"
                   className="form-control"
                   type="text"
                   value={this.state.lastName}
                   onChange={this.handleLastName} />
          </div>
          {this.lastNameFeedback()}
        </div>
        <div className="form-group row">
          <label htmlFor="loginEmail" className="col-4 col-form-label"><span className="required">* </span>Email</label>
          <div className="col-7">
            <input id="loginEmail"
                   className="form-control"
                   type="text"
                   value={this.state.email}
                   onChange={this.handleEmail} />
          </div>
          {this.emailFeedback()}
        </div>
        <div className="form-group row">
          <label htmlFor="loginConfirmEmail" className="col-4 col-form-label"><span className="required">* </span>Confirm Email</label>
          <div className="col-7">
            <input id="loginConfirmEmail"
                   className="form-control"
                   type="text"
                   value={this.state.confirmEmail}
                   onChange={this.handleConfirmEmail} />
          </div>
          {this.emailMatchFeedback()}
        </div>
        <div className="form-group row">
          <label htmlFor="loginPassword" className="col-4 col-form-label"><span className="required">* </span>Password</label>
          <div className="col-7">
            <input id="loginPassword"
                   className="form-control"
                   type="password"
                   value={this.state.password}
                   onChange={this.handlePassword} />
          </div>
          {this.passwordFeedback()}
        </div>
        <div className="form-group row">
          <label htmlFor="loginConfirmPassword" className="col-4 col-form-label"><span className="required">* </span>Confirm Password</label>
          <div className="col-7">
            <input id="loginConfirmPassword"
                   className="form-control"
                   type="password"
                   value={this.state.confirmPassword}
                   onChange={this.handleConfirmPassword} />
          </div>
          {this.passwordMatchFeedback()}
        </div>
        <button className="signup-button button-round"
                onClick={this.handleSubmit}>Create Account</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createAccount: (first, last, email, password) => dispatch(createAccount(first, last, email, password)),
});

export default connect(state => state, mapDispatchToProps)(SignupView);
