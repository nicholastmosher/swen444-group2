/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import classNames from 'classnames';
import { addTransaction } from '../../actions/TransactionActions';

const AMOUNT_TYPES = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

const initialState = {
  description: '',
  date: '',
  amount: undefined,
  type: AMOUNT_TYPES.EXPENSE,
  category: '',
  failedSubmit: false,
};

class AddTransactionModal extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  reset = () => this.setState(initialState);
  check = () => this.state.failedSubmit;

  handleDescription = (e) => this.setState({ description: e.target.value });
  handleDate = (e) => this.setState({ date: e.target.value });
  handleAmount = (e) => this.setState({ amount: e.target.value });
  handleAmountType = (e) => this.setState({ type: e.target.value });
  handleCategory = (e) => this.setState({ category: e.target.value });

  validDescription = () => !!this.state.description;
  validDate = () => !!this.state.date;
  validAmount = () => !isNaN(this.state.amount);

  handleSubmit = () => {

    // Check valid inputs before submitting.
    if (!this.validDescription() ||
        !this.validDate() ||
        !this.validAmount()) {
      this.setState({failedSubmit: true});
      return;
    }

    // Convert date to correct format
    let date = new Date(this.state.date);

    // KNOWN BUG: There is some sort of localization issue with getDate where it often shows the day to be a day behind
    let dateString = (date.getMonth() + 1) + "/" + (date.getDate() + 1) + "/" + date.getFullYear();

    // Amount is positive for income, negative for expense.
    const a = parseFloat(this.state.amount);
    const amount = (this.state.type === AMOUNT_TYPES.EXPENSE) ?
      (a < 0 ? a : -a) :
      (a > 0 ? a : -a);

    this.props.addTransaction(
      this.props.baseTid,
      dateString,
      this.state.description,
      amount,
      this.state.category,
    );
    $('#' + this.props.modalId).modal('hide');
    this.reset();
  };

  descFeedback = () => (
    !this.validDescription() && this.check() ?
      <div className="form-control-feedback">
        Descriptions can't be blank
      </div> : null
  );

  dateFeedback = () => (
    !this.validDate() && this.check() ?
      <div className="form-control-feedback">
        Date is required and must be as 'MM/DD/YYYY'
      </div> : null
  );

  amountFeedback = () => (
    !this.validAmount() && this.check() ?
      <div className="form-control-feedback">
        Amount must be a number
      </div> : null
  );

  render() {
    return (
      <div className="modal fade" id={this.props.modalId}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a Transaction</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className={classNames('form-group', 'col-md-12', {
                'has-warning': !this.validDescription() && this.check(),
              })}>
                <label className="form-control-label"><span className="required">* </span>Description</label>
                <input id="Description"
                       placeholder="Example: 'Got Paid Today'"
                       className="form-control"
                       type="text"
                       value={this.state.description}
                       onChange={this.handleDescription}/>
                {this.descFeedback()}
              </div>
              <div className={classNames('form-group', 'col-md-12', {
                'has-warning': !this.validDate() && this.check(),
              })}>
                <label className="form-control-label"><span className="required">* </span>Date</label>
                <input id="Date"
                       className="form-control"
                       type="date"
                       value={this.state.date}
                       onChange={this.handleDate}/>
                {this.dateFeedback()}
              </div>
              <div className={classNames('form-group', 'col-md-12', {
                'has-danger': !this.validAmount() && this.check(),
              })}>
                <label className="form-control-label">
                <span className="required">* </span>Amount</label>
                <div className="input-group">
                  <span className="input-group-addon">$</span>
                  <input id="Amount"
                         placeholder="0.00"
                         className="form-control"
                         type="text"
                         value={this.state.amount}
                         onChange={this.handleAmount}/>
                </div>
                {this.amountFeedback()}
                  <div className="form-group col-md-12 gimme-space">
                      <label className="radio-inline">
                          <input id="amountType"
                                 type="radio"
                                 name="amountTypeRadio"
                                 value={AMOUNT_TYPES.EXPENSE}
                                 checked={this.state.type === AMOUNT_TYPES.EXPENSE}
                                 onChange={this.handleAmountType}/>&nbsp;Expense&nbsp;&nbsp;
                      </label>
                      <label className="radio-inline">
                          <input id="amountType"
                                 type="radio"
                                 name="amountTypeRadio"
                                 value={AMOUNT_TYPES.INCOME}
                                 checked={this.state.type === AMOUNT_TYPES.INCOME}
                                 onChange={this.handleAmountType}/>&nbsp;Income
                      </label>
                  </div>
              </div>
              <div className="form-group col-md-12">
                <label className="form-control-label"><span className="required">* </span>Category</label>
                <input id="Category"
                       className="form-control"
                       type="text"
                       placeholder="Example Transaction Category: Gas, Recreation, Income, etc."
                       value={this.state.category}
                       onChange={this.handleCategory}/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary btn-success"
                      onClick={this.handleSubmit}>
                Add Transaction
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal"
                      onClick={this.reset}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (baseTid, date, description, amount, category) =>
    dispatch(addTransaction(baseTid, date, description, amount, category)),
});

export default connect(state => state, mapDispatchToProps)(AddTransactionModal);
