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
        <div className="col-md-1"></div>
        <h2 className="col-md-2">Transactions</h2>
        <div className="col-md-6"></div>
        <div className="col-md-2 text-right">
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addTransaction">
            Add Transaction
          </button>
        </div>
        <div className="modal fade" id="addTransaction">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add a Transaction</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col-md-12">
                  <label>Date</label>
                  <input id="Date"
                         className="form-control"
                         type="text"
                         value={""}
                         onChange={""}/>
                </div>
                <div className="col-md-12">
                  <label>Amount</label>
                  <input id="Amount"
                         className="form-control"
                         type="text"
                         value={""}
                         onChange={""}/>
                </div>
                <div className="col-md-12">
                  <label>Category</label>
                  <input id="Category"
                         className="form-control"
                         type="text"
                         value={""}
                         onChange={""}/>
                </div>
                <div className="col-md-12">
                  <label>Tags</label>
                  <input id="Tags"
                         className="form-control"
                         type="text"
                         value={""}
                         onChange={""}/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-success"
                        onClick={() => props.actions.addTransaction(
                            props.baseTid,
                            '04/05/06',
                            'Newly added transaction',
                            123,
                            '4'
                        )}>Add Transaction
                </button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
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
