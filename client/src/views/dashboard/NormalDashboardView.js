/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

const NormalDashboardView = (props) => (
  <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="jumbotron-fluid">Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <h3>Graphs go here, as well as delete button and datepickers</h3>
            <button className="btn btn-success" type="button">Delete Plan</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="container">
              <h3>Balance</h3>
              <ul className="list-group">
                <li className="list-group-item income-color">Income: </li>
                <li className="list-group-item expense-color">Expenses: </li>
                <li className="list-group-item">Net: </li>
              </ul>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="container">
              <h3>Collaborator Updates</h3>
              <ul className="list-group">
                <li className="list-group-item">Wife: </li>
                <li className="list-group-item">No Wife: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default NormalDashboardView;
