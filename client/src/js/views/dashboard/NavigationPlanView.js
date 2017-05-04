/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import { selectPlan } from '../../actions/PlanActions';

const NavigationPlanView = (props) => {
  const plan = props.plan;
  return (
    <span key={props.key} className="dropdown-item plan-item"
              onClick={() => props.selectPlan(plan.id)}>
        {plan.get('name')}
      <button className="btn btn-danger btn-sm"
              data-toggle="modal" data-target={'#' + props.modalId}>
        Remove
      </button>
    </span>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectPlan: (id) => dispatch(selectPlan(id)),
});

export default connect(s => s, mapDispatchToProps)(NavigationPlanView);
