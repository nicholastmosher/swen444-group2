/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import $ from 'jquery';
import classNames from 'classnames';
import { addTransaction } from '../../actions/TransactionActions';

const initialState = {
  description: '',
  validDescription: false,
  date: '',
  validDate: false,
  amount: '',
  validAmount: false,
  category: '',
  tags: '',
  failedSubmit: false,
};

class AddTransactionModal extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
  };

  handleDescription = (e) => {
    const description = e.target.value;
    this.setState(state => ({description, validDescription: !!description}));
  };

  handleDate = (e) => {
    const date = e.target.value;
    this.setState(state => ({date, validDate: !!date}));
  };

  handleAmount = (e) => {
    const amount = e.target.value;
    this.setState(state => ({amount, validAmount: !isNaN(amount)}))
  };

  handleCategory = (e) => {
    const category = e.target.value;
    this.setState(state => ({category}));
  };

  handleTags = (e) => {
    const tags = e.target.value;
    this.setState(state => ({tags}));
  };

  handleSubmit = () => {
    console.log("HandleSubmit");
    if (!this.state.validDescription ||
        !this.state.validDate ||
        !this.state.validAmount) {
      this.setState(state => ({failedSubmit: true}));
      return;
    }
    const tags = (
      !this.state.tags ?
        List() :
        List(this.state.tags.split(/\s+/))
    );
    this.props.addTransaction(
      this.props.baseTid,
      this.state.date,
      this.state.description,
      parseInt(this.state.amount),
      this.state.category,
      tags,
    );
    $('#' + this.props.modalId).modal('hide');
    this.reset();
  };

  descFeedback = () => (
    !this.state.validDescription && this.state.failedSubmit ?
      <div className="form-control-feedback">
        Descriptions can't be blank
      </div> : null
  );

  dateFeedback = () => (
    !this.state.validDate && this.state.failedSubmit ?
      <div className="form-control-feedback">
        Date is required and must be as 'MM/DD/YYYY'
      </div> : null
  );

  amountFeedback = () => (
    !this.state.validAmount && this.state.failedSubmit ?
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
                'has-warning': !this.state.validDescription && this.state.failedSubmit,
              })}>
                <label className="form-control-label"><span className="required">* </span>Description</label>
                <input id="Description"
                       className="form-control"
                       type="text"
                       value={this.state.description}
                       onChange={this.handleDescription}/>
                {this.descFeedback()}
              </div>
              <div className={classNames('form-group', 'col-md-12', {
                'has-warning': !this.state.validDate && this.state.failedSubmit,
              })}>
                <label className="form-control-label"><span className="required">* </span>Date</label>
                <input id="Date"
                       className="form-control"
                       type="text"
                       value={this.state.date}
                       onChange={this.handleDate}/>
                {this.dateFeedback()}
              </div>
              <div className={classNames('form-group', 'col-md-12', {
                'has-danger': !this.state.validAmount && this.state.failedSubmit,
              })}>
                <label className="form-control-label"><span className="required">* </span>Amount</label>
                <input id="Amount"
                       className="form-control"
                       type="text"
                       value={this.state.amount}
                       onChange={this.handleAmount}/>
                {this.amountFeedback()}
              </div>
              <div className="form-group col-md-12">
                <label className="form-control-label">Category</label>
                <input id="Category"
                       className="form-control"
                       type="text"
                       value={this.state.category}
                       onChange={this.handleCategory}/>
              </div>
              <div className="form-group col-md-12">
                <label className="form-control-label">Tags</label>
                <input id="Tags"
                       className="form-control"
                       type="text"
                       value={this.state.tags}
                       onChange={this.handleTags}/>
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
  addTransaction: (baseTid, date, description, amount, category, tags) =>
    dispatch(addTransaction(baseTid, date, description, amount, category, tags)),
});

export default connect(state => state, mapDispatchToProps)(AddTransactionModal);
