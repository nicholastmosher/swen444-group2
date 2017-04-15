/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

const InitialDashboardView = (props) => (
  <div className="container-fluid text-center parent">
    <div className="container child">
      <br/>
      <br/>
      <h1>Welcome</h1>
      <h3>To get started, add some transactions</h3><br/>
      <button className="btn-primary">New Transaction</button>
    </div>
  </div>
);

export default InitialDashboardView;
