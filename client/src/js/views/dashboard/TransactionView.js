/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <th className="th">Description</th>
                <th className="th">Amount</th>
                <th className="th">Balance</th>
              </tr>
              </thead>
              <tbody>
              {this.props.transactions.entrySeq().map(([t, amount]) => (
                <tr key={t.id}
                    onClick={() => this.selectTransaction(t.id)}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
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
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td>{this.props.tById(this.state.selectedTid).description}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>{this.props.tById(this.state.selectedTid).date}</td>
                  </tr>
                  <tr>
                    <td>Amount</td>
                    <td>{this.props.tById(this.state.selectedTid).amount}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{this.props.tById(this.state.selectedTid).category}</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                    <td>{toCSV(this.props.tById(this.state.selectedTid).tags)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
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
