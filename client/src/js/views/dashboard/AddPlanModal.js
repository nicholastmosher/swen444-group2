/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

const AddPlanModal = (props) => {
  const dismiss = () => $('#' + props.modalId).modal('hide');
  return (
    <div id={props.modalId} className="modal fade">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create a new Financial Plan</h5>
          </div>
          <div className="modal-body">
            <p>
              Configure your starting balance, initial collaborators, and
              other plan options here.
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={dismiss}>Create</button>
            <button className="btn btn-secondary" onClick={dismiss}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlanModal;
