/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { connect } from 'react-redux';

const CollaboratorsView = (props) => (
  <div className="container-fluid">
    <div className="row add-collaborators">
      <h3 className="col-md-2">Add Collaborators</h3>
      <div id="custom-search-input">
        <div className="input-group">
          <input type="text" className="search-query form-control" placeholder="Collaborator Email"/>
          <span className="input-group-btn">
            <button className="btn btn-success" type="button">
              <span className="glyphicon glyphicon-search">Add User</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <table className="table table-striped">
      <thead>
      <tr>
        <th className="th">First Name</th>
        <th className="th">Last Name</th>
        <th className="th">Email</th>
        <th className="th">Access Privileges</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.owner.get('firstName')}</td>
          <td>{props.owner.get('lastName')}</td>
          <td>{props.owner.get('email')}</td>
          <td>{props.privileges(props.owner).map(p => (p + ", "))}</td>
        </tr>
      {props.collaborators.map(collaborator => (
        <tr key={collaborator.get('id')}>
          <td>{collaborator.get('firstName')}</td>
          <td>{collaborator.get('lastName')}</td>
          <td>{collaborator.get('email')}</td>
          <td>{props.privileges(collaborator).map(p => (p + ", "))}
          <button className="btn-danger btn-sm float-right">Revoke Access</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = ({PlanReducer, UserReducer}) => {
  const activePlan = PlanReducer.get('activePlan');
  const planPermissions = PlanReducer.get('permissions').filter(p => p.plan === activePlan.id);
  const ownerId = planPermissions.filter(p => p.accesses.includes('Owner')).first().user;
  const collaboratorIds = planPermissions.filter(p => !p.accesses.includes('Owner')).map(p => p.user);
  const owner = UserReducer.getIn(['users', ownerId]);
  const collaborators = collaboratorIds.map(id => UserReducer.getIn(['users', id]));
  const privileges = (user) => (planPermissions.filter(p => p.user === user.id).first().accesses);
  return {
    owner,
    collaborators,
    privileges,
  }
};

export default connect(mapStateToProps)(CollaboratorsView);
