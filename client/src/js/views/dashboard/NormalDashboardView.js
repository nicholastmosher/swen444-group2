/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */

import React from 'react';
import { Chart } from 'react-google-charts';
import { DatePicker } from '../../components/DatePicker';

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
            <div className="row">
              <div className="container">
                <Chart
                    chartType="ScatterChart"
                    data={[
                        ['Income', 'Money'],
                        ['Work', 22200],
                        ['Babysitting', 1000],
                        ['Coding', 3000],
                        ['Other', 5932],

                    ]}
                    options={{
                      title: 'My Budget',
                      is3D: true,
                    }}
                    width="100%"
                    graph_id="ScatterChart"
                />
              </div>
            </div>
            <div className="row container date-picker-container">
              <div className="col-md-6">
                { DatePicker(this.props) }
              </div>
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
          <br/>
          <div className="row container">
            <button className="btn delete-button" type="button">Delete Plan</button>
          </div>
        </div>
      </div>
  </div>
);

export default NormalDashboardView;
