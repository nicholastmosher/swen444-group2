/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import { getTransactions, toCSV } from '../../data/Utils';
import AddTransactionModal from './AddTransactionModal';

const TransactionView = (props) => {
  const tModal = 'addTransactionModal';
  return (
    <div className="container-fluid">
      <div className="row add-transactions">
        <div className="col-md-1"></div>
        <h2 className="col-md-2">Transactions</h2>
        <div className="col-md-6"></div>
        <div className="col-md-2 text-right">
          <button className="btn btn-success"
                  type="button"
                  data-toggle="modal"
                  data-target={'#' + tModal}>
            Add Transaction
          </button>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row add-transactions">
        <div className="col-md-1"></div>
        <div className="col-md-5">
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
        <div className="col-md-5">
          <div className="container">
            <h3>Selected Transaction</h3>
            <ul className="list-group">
              <li className="list-group-item">ID:</li>
              <li className="list-group-item">Date:</li>
              <li className="list-group-item">Amount:</li>
              <li className="list-group-item">Category:</li>
              <li className="list-group-item">Tags:</li>
            </ul>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <AddTransactionModal modalId={tModal} baseTid={props.baseTid}/>
    </div>
  );
};

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

export default connect(mapStateToProps)(TransactionView);
