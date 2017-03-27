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
            <div className="row container">
              <h3>Summary</h3>
            </div>
            <div className="row container">
              <img src="http://www.ielts-exam.net/images/graphs/IELTS_Writing_Task_1_152.png"/>
            </div>
            <div className="row container date-picker-container">
              <div className="col-md-6">
                <button className="btn btn-primary date-picker1" type="button">Date Picker1</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary date-picker2" type="button">Date Picker2</button>
              </div>
            </div>
            <div className="row container">
              <button className="btn btn-success" type="button">Delete Plan</button>
            </div>
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
