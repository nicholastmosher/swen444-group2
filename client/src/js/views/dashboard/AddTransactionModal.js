/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import * as TransactionActions from '../../actions/TransactionActions';

class AddTransactionModal extends Component {
  constructor() {
    super();
    this.state = Map({
      description: '',
      date: '',
      validDate: true,
      amount: '',
      validAmount: true,
      category: '',
      tags: '',
      failedSubmit: false,
    });
  }

  handleDescription = (e) => {
    console.log("HandleDescription");
    console.log(this.state);
    const desc = e.target.value;
    this.setState(this.state.set('desc', desc)
                            .set('validDesc', !!desc));
  };

  handleDate = (e) => {
    const date = e.target.value;
    this.setState(this.state.set('date', date)
                            .set('validDate', !!date));
  };

  handleAmount = (e) => {
    const amount = e.target.value;
    this.setState(this.state.set('amount', amount)
                            .set('validAmount', !isNaN(amount)));
  };

  handleCategory = (e) => {
    const category = e.target.value;
    this.setState(this.state.set('category', category));
  };

  handleTags = (e) => {
    const tags = e.target.value;
    this.setState(this.state.set('tags', tags));
  };

  handleSubmit = () => {
    if (!this.state.get('validDesc') ||
        !this.state.get('validDate' ||
        !this.state.get('validAmount'))) {
      this.setState(this.state.set('failedSubmit', true));
      return;
    }
    const tags = (
      !this.state.get('tags') ?
        List() :
        List(this.state.get('tags').split(/\s+/))
    );
    this.props.actions.addTransaction(
      this.props.baseTid,
      this.state.get('date'),
      this.state.get('description'),
      this.state.get('amount'),
      this.state.get('category'),
      tags,
    )
  };

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
              <div className="col-md-12">
                <label>Description</label>
                <input id="Description"
                       className="form-control"
                       type="text"
                       value={this.state.get('description')}
                       onChange={this.handleDescription}/>
              </div>
              <div className="col-md-12">
                <label>Date</label>
                <input id="Date"
                       className="form-control"
                       type="text"
                       value={this.state.get('date')}
                       onChange={this.handleDate}/>
              </div>
              <div className="col-md-12">
                <label>Amount</label>
                <input id="Amount"
                       className="form-control"
                       type="text"
                       value={this.state.get('amount')}
                       onChange={this.handleAmount}/>
              </div>
              <div className="col-md-12">
                <label>Category</label>
                <input id="Category"
                       className="form-control"
                       type="text"
                       value={this.state.get('category')}
                       onChange={this.handleCategory}/>
              </div>
              <div className="col-md-12">
                <label>Tags</label>
                <input id="Tags"
                       className="form-control"
                       type="text"
                       value={this.state.get('tags')}
                       onChange={this.handleTags}/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary btn-success"
                      onClick={this.handleSubmit}>
                Add Transaction
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TransactionActions, dispatch),
});

export default connect(mapDispatchToProps)(AddTransactionModal);
