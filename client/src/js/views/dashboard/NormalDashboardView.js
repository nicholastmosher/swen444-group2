/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */

import React from 'react';
import { Chart } from 'react-google-charts';
import DatePicker  from '../../Components/DatePicker';
import { connect } from 'react-redux';
import { getMostRecentTransactions, toCSV } from '../../data/Utils';


const NormalDashboardView = (props) => (
  <div className="container-fluid">
    <br/>
      <div className="row">
        <div className="col-md-12">
          <h1 className="jumbotron-fluid">{props.planName} Dashboard</h1>
        </div>
        <div>
          <button className="btn delete-button" type="button">Delete Plan</button>
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
                <DatePicker />
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
              <h3>Recent Transactions</h3>
              <table className="table table-striped table-bordered">
                <thead>
                <tr>
                  <th className="th">Date</th>
                  <th className="th">Description</th>
                  <th className="th">Amount</th>
                  <th className="th">Remaining Balance</th>
                  <th className="th">Category</th>
                  <th className="th">Tags</th>
                </tr>
                </thead>
                <tbody>
                {props.transactions.entrySeq().map(([t, amount]) => (
                    <tr key={t.id}>
                      <td>{t.date}</td>
                      <td>{t.description}</td>
                      <td>{(t.amount > 0 ? ('+' + t.amount) : t.amount)}</td>
                      <td>{amount}</td>
                      <td>{t.category}</td>
                      <td>{toCSV(t.tags.toSeq())}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  </div>
);

const mapStateToProps = ({PlanReducer, TransactionReducer}) => {
  const planName = PlanReducer.getIn([ 'plans', PlanReducer.get('activePlan'), 'name' ]);
  const planId = PlanReducer.get('activePlan');
  const plans = PlanReducer.get('plans');
  const baseTransactionId = PlanReducer.getIn([ 'plans', planId, 'baseTransaction' ]);
  const transactions = getMostRecentTransactions(TransactionReducer, baseTransactionId);
  return ({
    planName,
    planId,
    baseTid: baseTransactionId,
    transactions,
  });
};

export default connect(mapStateToProps)(NormalDashboardView);
