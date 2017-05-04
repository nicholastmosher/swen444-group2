/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

const ConfirmDeleteModal = (props) => {
  const dismiss = () => $('#' + props.modalId).modal('hide');
  return (
    <div id={props.modalId} className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
          </div>
          {props.message?
            <div className="modal-body">
              <p>{props.message}</p>
            </div>: null}
          <div className="modal-footer">
            <button className="btn btn-primary"
                    onClick={dismiss}>Confirm</button>
            <button className="btn btn-secondary"
                    onClick={dismiss}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
