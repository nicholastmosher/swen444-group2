/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TransactionActions from '../../actions/TransactionActions';
import { getTransactions, toCSV } from '../../data/Utils';


const TransactionView = (props) => (
  <div className="container-fluid">
    <div className="row add-transactions">
      <h3 className="col-md-2">Add Transactions</h3>
      <div className="col-md-2">
      <label>Date</label>
        <input id="Date"
         className="form-control"
         type="text"
         value={""}
         onChange={""} />
      </div>
      <div className="col-md-2">
      <label>Type</label>
        <input id="Type of Transaction"
               className="form-control"
               type="text"
               value={""}
               onChange={""} />
      </div>
      <div className="col-md-2">
      <label>Amount</label>
        <input id="Amount"
               className="form-control"
               type="text"
               value={""}
               onChange={""} />
      </div>
      <div className="col-md-2">
      <label>Tags</label>
        <input id="Amount"
               className="form-control"
               type="text"
               value={""}
               onChange={""} />
      </div>
      <button className="btn btn-success" type="button"
              onClick={()=>props.actions.addTransaction(
                props.baseTid,
                '04/05/06',
                'Newly added transaction',
                123,
                '4'
              )}>
        <span className="glyphicon glyphicon-search">Add Transaction</span>
      </button>
    </div>
    <div className="row add-transactions">
        <div className="col-md-6">
            <table className="table table-hover">
              <thead>
              <tr>
                <th className="th">Date</th>
                <th className="th">Amount</th>
                <th className="th">Balance</th>
              </tr>
              </thead>
              <tbody>
              {props.transactions.entrySeq().map(([t, amount]) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{(t.amount > 0 ? ('+' + t.amount) : t.amount)}</td>
                <td>{amount}</td>
              </tr>
              ))}
              </tbody>
            </table>
        </div>
      <div className="col-md-6">
        <div className="container">
            <h3>Selected Transaction</h3>
            <ul className="list-group">
                <li className="list-group-item">ID: </li>
                <li className="list-group-item">Date: </li>
                <li className="list-group-item">Amount: </li>
                <li className="list-group-item">Category: </li>
                <li className="list-group-item">Tags: </li>
                </ul>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({PlanReducer, TransactionReducer}) => {
  const planId = PlanReducer.get('activePlan');
  const baseTransactionId = PlanReducer.getIn([ 'plans', planId, 'baseTransaction' ]);
  const transactions = getTransactions(TransactionReducer, baseTransactionId);
  return ({
    planId,
    baseTid: baseTransactionId,
    transactions,
  });
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TransactionActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionView);
