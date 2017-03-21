/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import SignupView from './SignupView';
import LoginView from './LoginView';

export default function AuthView() {
  return (
    <div>
      <nav className="navbar budget-auth-navbar">
        <h1 className="navbar-brand mb-0">Budget Tool 6000</h1>
      </nav>
      <div className="budget-auth container">
        <SignupView />
        <LoginView />
      </div>
    </div>
  );
}
