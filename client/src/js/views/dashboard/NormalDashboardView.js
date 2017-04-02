/**
 * @author Daniel Roberts
 */
import React from 'react';
import { Chart } from 'react-google-charts';
import DatePicker  from '../../components/DatePicker';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getMostRecentTransactions, getGraphData, getBalanceData } from '../../data/Utils';
import * as PlanActions from '../../actions/PlanActions';

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
              <h3>Budget Snapshot</h3>
              <div className="progress">
                <div className="progress-bar snapshot-bar-income" role="progressbar" style={{width: props.snapshotWidth}}>
                  ${props.amountOfBudget} of ${props.income}
                </div>
                <div className="progress-bar snapshot-bar-remaining" role="progressbar" style={{width: props.remainingWidth}}>
                  ${props.net} remaining
                </div>
              </div>
            </div>
          </div>
          <div className="row row-inner">
            <div className="container">
              <h3>Balance</h3>
              <ul className="list-group">
                <li className="list-group-item income-color">Income: {props.income}</li>
                <li className="list-group-item expense-color">Expenses: {props.expenses}</li>
                <li className="list-group-item">Net: {props.net}</li>
              </ul>
            </div>
          </div>
          <br/>
          <div className="row row-inner">
            <div className="container">
              <h3>Recent Transactions</h3>
              <table className="table table-striped">
                <thead>
                <tr>
                  <th className="th">Date</th>
                  <th className="th">Description</th>
                  <th className="th">Amount</th>
                  <th className="th">Balance</th>
                  <th className="th">Category</th>
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
  const balanceData = getBalanceData(TransactionReducer, baseTransactionId);
  const transactions = getMostRecentTransactions(TransactionReducer, baseTransactionId, 3);

  const snapshotWidth = ((balanceData.Expense/(balanceData.Income + Math.abs(balanceData.Expense))) * 100).toString() + "%";
  const remainingWidth = (100 - ((balanceData.Expense/(balanceData.Income + Math.abs(balanceData.Expense))) * 100)).toString() + "%";
  const amountOfBudget = Math.abs(balanceData.Expense);

  return ({
    planName,
    planId,
    baseTid: baseTransactionId,
    graphData,
    income: balanceData.Income,
    expenses: balanceData.Expense,
    net: balanceData.Net,
    transactions,
    snapshotWidth,
    remainingWidth,
    amountOfBudget,
  });
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PlanActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NormalDashboardView);
