/**
 * @author Zachary Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const SplashView = (props) => (
    <div className="text-center parent">
      <div className="child">
        <h1>MoneyMaid</h1>
        <h3>Clean Up Your Finances Today!</h3><br/>
        <NavLink to="/auth" className="btn btn-info start-button" activeClassName="active">Get Started</NavLink>
      </div>
    </div>
);

export default SplashView;

