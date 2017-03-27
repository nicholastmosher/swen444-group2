/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';

const TransactionView = (props) => (
  <div className="container-fluid">
    <div className="row add-transactions">
      <h3 className="col-md-2">Add Transactions</h3>
      <button className="btn btn-success" type="button">
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
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>03/07/17</td>
        <td>Got some groceries</td>
        <td>$61.67</td>
        <td>$107.33</td>
      </tr>
      <tr>
        <td>03/08/18</td>
        <td>Snacks and gas</td>
        <td>$41.97</td>
        <td>$107.33</td>
      </tr>
      {/*<tr>*/}
        {/*<td>{props.owner.get('firstname')}</td>*/}
        {/*<td>{props.owner.get('lastname')}</td>*/}
        {/*<td>{props.owner.get('email')}</td>*/}
        {/*<td>{props.privileges(props.owner).map(p => (p + ", "))}</td>*/}
      {/*</tr>*/}
      {/*{props.collaborators.map(collaborator => (*/}
        {/*<tr key={collaborator.get('id')}>*/}
          {/*<td>{collaborator.get('firstName')}</td>*/}
          {/*<td>{collaborator.get('lastName')}</td>*/}
          {/*<td>{collaborator.get('email')}</td>*/}
          {/*<td>{props.privileges(collaborator).map(p => (p + ", "))}*/}
            {/*<button className="btn-danger btn-sm float-right">Revoke Access</button>*/}
          {/*</td>*/}
        {/*</tr>*/}
      {/*))}*/}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = ({BudgetReducer}) => ({

});

export default connect(mapStateToProps)(TransactionView);
