/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { PlanActionTypes } from '../constants/PlanActionTypes';
import { plans } from '../data/Presets';

const PlanReducer = (state = plans, action) => {

  switch(action.type) {

    case PlanActionTypes.CREATE_PLAN:
      return state; //TODO implement

    case PlanActionTypes.RENAME_PLAN:
      return state; //TODO implement

    case PlanActionTypes.SELECT_PLAN:
      return state.set('activePlan', action.planId);

    case PlanActionTypes.DELETE_PLAN:

      // If any permissions referenced this plan, delete them.
      const permissions = state.get('permissions');
      const pId = action.planId;
      permissions.filter(p => p.id === pId).forEach(p => {
        state = state.deleteIn([ 'permissions', p.id ]);
      });

      // Delete the plan.
      return state.deleteIn([ 'plans', action.planId ]);

    case PlanActionTypes.ADD_COLLABORATOR:
      return state; //TODO implement

    case PlanActionTypes.REMOVE_COLLABORATOR:
      return state; //TODO implement

    case PlanActionTypes.EDIT_COLLABORATOR:
      return state; //TODO implement

    case PlanActionTypes.CHANGE_OWNER:
      return state; //TODO implement

    default:
      return state;
  }
};

export default PlanReducer;
