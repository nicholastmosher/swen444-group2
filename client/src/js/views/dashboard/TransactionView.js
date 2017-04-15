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
    <table className="table table-striped">
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
