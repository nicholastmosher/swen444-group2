/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getTransactions, toCSV } from '../../data/Utils';
import AddTransactionModal from './AddTransactionModal';

class TransactionView extends Component {
  constructor() {
    super();
  };

  componentWillMount = () => {
    this.state = {
      planId: this.props.planId,
      selectedTid: this.props.baseTid,
    };
  };

  componentWillReceiveProps = (props) => {
    if (this.state.planId !== props.planId) {
      this.setState(state => ({
        planId: props.planId,
        selectedTid: props.baseTid,
      }))
    }
  };

  selectTransaction = (id) => {
    if (!id) return;
    if (!this.props.transactions.some((v, k) => k.id === id)) return;
    this.setState(state => ({selectedTid: id}));
  };

  render() {
    const tModal = 'addTransactionModal';
    return (
      <div className="container-fluid">
        <div className="row add-transactions">
          <div className="col-md-1"/>
          <h2 className="col-md-2">Transactions</h2>
          <div className="col-md-6"/>
          <div className="col-md-2 text-right">
            <button className="btn btn-success"
                    type="button"
                    data-toggle="modal"
                    data-target={'#' + tModal}>
              Add Transaction
            </button>
          </div>
          <div className="col-md-1"/>
        </div>
        <div className="row add-transactions">
          <div className="col-md-1"/>
          <div className="col-md-5">
            <table className="table table-hover">
              <thead>
              <tr>
                <th className="th">Date</th>
                <th className="th">Description</th>
                <th className="th">Amount</th>
              </tr>
              </thead>
              <tbody>
              {this.props.transactions.entrySeq().map(([t, amount]) => (
                <tr key={t.id}
                    onClick={() => this.selectTransaction(t.id)}
                    className={classNames({
                      'table-info': t.id === this.state.selectedTid,
                    })}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{(t.amount > 0 ? ('+' + t.amount) : t.amount)}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-5">
            <div className="container">
              <h3>Selected Transaction</h3>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="td-transactions">Description</td>
                    <td className="td-transactions">{this.props.tById(this.state.selectedTid).description}</td>
                  </tr>
                  <tr>
                    <td className="td-transactions">Date</td>
                    <td className="td-transactions">{this.props.tById(this.state.selectedTid).date}</td>
                  </tr>
                  <tr>
                    <td className="td-transactions">Amount</td>
                    <td className="td-transactions">{this.props.tById(this.state.selectedTid).amount}</td>
                  </tr>
                  <tr>
                    <td className="td-transactions">Remaining Balance</td>
                    <td className="td-transactions">{this.props.transactions.get(this.props.tById(this.state.selectedTid))}</td>
                  </tr>
                  <tr>
                    <td className="td-transactions">Category</td>
                    <td className="td-transactions">{this.props.tById(this.state.selectedTid).category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-1"/>
          </div>
        </div>
        <AddTransactionModal modalId={tModal} baseTid={this.props.baseTid}/>
      </div>
    );
  }
}

const mapStateToProps = ({PlanReducer, TransactionReducer}) => {
  const planId = PlanReducer.get('activePlan');
  const baseTransactionId = PlanReducer.getIn([ 'plans', planId, 'baseTransaction' ]);
  const transactions = getTransactions(TransactionReducer, baseTransactionId);
  return ({
    planId,
    baseTid: baseTransactionId,
    transactions,
    tById: (id) => transactions.findKey((v, k) => k.id === id),
  });
};

export default connect(mapStateToProps)(TransactionView);
