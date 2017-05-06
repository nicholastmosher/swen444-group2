/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toCSV } from '../../data/Utils';
import classNames from 'classnames';
import { bindActionCreators } from "redux";

const CollaboratorsView = (props) => {
    return(
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="container-fluid">
          <div className="row add-collaborators">
            <h2 className="col-md-2">Collaborators</h2>
            <div className="col-md-7"></div>
            <div className="col-md-3">
            <div id="custom-search-input">
              <div className="input-group">
                <span className="input-group-btn">
                <button className="btn btn-success" type="button" data-toggle="modal" data-target={'#collaboratorModal'}>
                  <span className="glyphicon glyphicon-search">Add User</span>
                  </button>
                  </span>
                  <div className="modal" id="collaboratorModal">
                      <div className="modal-dialog" role="document">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                              </div>
                              <div className={classNames('modal-body', 'form-group')}>
                                                <label className="form-control-label"><span className="required">* </span>Email</label><div>
                                                <input id="Email"
                                                       className="emailForm"
                                                       type="text"/></div>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">Add User</button>
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cancel</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
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
              <td>{toCSV(props.privileges(props.owner).toSeq())}</td>
            </tr>
            {props.collaborators.map(collaborator => (
                <tr key={collaborator.get('id')}>
                  <td>{collaborator.get('firstName')}</td>
                  <td>{collaborator.get('lastName')}</td>
                  <td>{collaborator.get('email')}</td>
                  <td>{toCSV(props.privileges(collaborator).toSeq())}
                    <button className="btn-danger btn-sm float-right" data-toggle="modal" data-target={"#revokeAccess" + collaborator.get('id')}>Revoke Access</button>
                    <div className="modal fade" id={"revokeAccess" + collaborator.get('id')}>
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Revoke User Access</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <p>Are you sure you want to revoke access for {collaborator.get('email')}?</p>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Confirm Revocation</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel Revocation</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
        )
    };

const mapStateToProps = ({PlanReducer, AppReducer}) => {
  const activePlan = PlanReducer.getIn([ 'plans', PlanReducer.get('activePlan') ]);
  const planPermissions = PlanReducer.get('permissions').filter(p => p.plan === activePlan.id);
  const ownerId = planPermissions.filter(p => p.accesses.includes('Owner')).first().user;
  const collaboratorIds = planPermissions.filter(p => !p.accesses.includes('Owner')).map(p => p.user);
  const owner = AppReducer.getIn(['users', ownerId]);
  const collaborators = collaboratorIds.map(id => AppReducer.getIn(['users', id]));
  const privileges = (user) => (planPermissions.filter(p => p.user === user.id).first().accesses);
  return {
    owner,
    collaborators,
    privileges,
  }
};

export default connect(mapStateToProps)(CollaboratorsView);
