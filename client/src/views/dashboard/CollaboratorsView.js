/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
 */
import React from 'react';

const CollaboratorsView = (props) => (
    <div className="container-fluid">
      <table className="table table-striped">
        <thead>
        <tr>
          <th className="th">Username</th>
          <th className="th">Name</th>
          <th className="th">Email</th>
          <th className="th">Access Privileges</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>JohnDoe12345</td>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Owner</td>
        </tr>
        <tr>
          <td>MaryMoe54321</td>
          <td>Mary Moe</td>
          <td>mary@example.com</td>
          <td>Editor
            <button className="btn-danger btn-sm float-right">Revoke Access</button>
          </td>
        </tr>
        <tr>
          <td>JulyDooley98765</td>
          <td>July Dooley</td>
          <td>july@example.com</td>
          <td>Viewer
            <button className="btn-danger btn-sm float-right">Revoke Access</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div className="row">
        <h3 className="col-md-2">Add Collaborators</h3>
        <div id="custom-search-input">
          <div className="input-group">
            <input type="text" className="search-query form-control" placeholder="Collaborator Username"/>
            <span className="input-group-btn">
              <button className="btn btn-success" type="button">
                <span className=" glyphicon glyphicon-search">Add User</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
);

export default CollaboratorsView;
