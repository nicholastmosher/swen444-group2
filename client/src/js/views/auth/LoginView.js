/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/AppActions';

const initialState = {
  email: '',
  emailValid: true,
  password: '',
  passwordValid: true,
  failedSubmit: false,
};

class LoginView extends Component {
  constructor() {
    super();
    this.state = initialState;
  };

  reset = () => this.setState(initialState);
  check = () => this.state.failedSubmit;

  handleEmail = (e) => this.setState({email: e.target.value});
  handlePassword = (e) => this.setState({password: e.target.value});

  handleSubmit = () => {
    if (!this.emailValid() || !this.passwordValid()) {
      this.setState(state => ({failedSubmit: true}));
      return;
    }
    if (this.loginValid()) {
      this.props.login(this.state.email, this.state.password);
      this.reset();
    }
  };

  emailValid = () => this.state.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  passwordValid = () => !!this.state.password;
  loginValid = () => this.props.validLogin(this.state.email, this.state.password);

  emailFeedback = () => (!this.emailValid() && this.check() ?
    <div className="form-group has-danger">
      <label className="form-control-feedback">Invalid Email</label>
    </div> : null
  );

  passwordFeedback = () => (!this.passwordValid() && this.check() ?
    <div className="form-group has-danger">
      <label className="form-control-feedback">Invalid Password</label>
    </div> : null
  );

  submitFeedback = () => (!this.loginValid() && this.check() ?
    <div className="form-group has-danger">
      <label className="form-control-feedback">Invalid email and password combination</label>
    </div> : null
  );

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
                   value={this.state.email}
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
                   value={this.state.password}
                   onChange={this.handlePassword} />
          </div>
          {this.passwordFeedback()}
        </div>
        {this.submitFeedback()}
        <button className="login-button button-round"
                onClick={this.handleSubmit}>Login</button>
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
  return ({
    emailExists,
    validLogin,
  });
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(logIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
