/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */

import React from 'react';
import { Chart } from 'react-google-charts';
import DatePicker  from '../../components/DatePicker';
import { connect } from 'react-redux';
import { getMostRecentTransactions, toCSV, getGraphData } from '../../data/Utils';

const NormalDashboardView = (props) => (
  <div className="container-fluid">
      <div className="row row-header">
        <div className="col-md-1"></div>
          <h2 className="col-md-8">Current Plan: {props.planName}</h2>
        <div className="col-md-2 text-right">
        <button type="button" className="btn btn-danger delete-button" data-toggle="modal" data-target="#deletePlan">
          Delete Financial Plan
        </button>
        </div>
        <div className="modal fade" id="deletePlan">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Financial Plan</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the following plan?</p>
                <p><strong>{props.planName}</strong></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Confirm Deletion</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel Deletion</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row row-inner">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="container">
            <div className="row container row-inner">
              <h3>Summary</h3>
            </div>
            <div className="row">
              <div className="container">
                <Chart
                    chartType="BarChart"
                    data={props.graphData}
                    options={{
                      title: props.planName,
                      is3D: true,
                    }}
                    width="100%"
                    graph_id="ScatterChart"
                />
              </div>
            </div>
            <div className="row container date-picker-container">
              <div className="col-md-5">
                <DatePicker />
              </div>
            </div>
            <br/>
            <div className="row row-inner">
              <div className="container">
                <h3>Collaborator Updates</h3>
                <ul className="list-group">
                  <li className="list-group-item">Collaborator 1: </li>
                  <li className="list-group-item">Collaborator 2: </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row row-inner">
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
          <div className="row row-inner">
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
        <div className="col-md-1"></div>
      </div>
  </div>
);

const mapStateToProps = ({PlanReducer, TransactionReducer}) => {
  const planName = PlanReducer.getIn([ 'plans', PlanReducer.get('activePlan'), 'name' ]);
  const planId = PlanReducer.get('activePlan');
  const plans = PlanReducer.get('plans');
  const baseTransactionId = PlanReducer.getIn([ 'plans', planId, 'baseTransaction' ]);
  const graphData = getGraphData(TransactionReducer, baseTransactionId);
  const transactions = getMostRecentTransactions(TransactionReducer, baseTransactionId, 3);
  return ({
    planName,
    planId,
    baseTid: baseTransactionId,
    graphData,
    transactions,
  });
};

export default connect(mapStateToProps)(NormalDashboardView);
