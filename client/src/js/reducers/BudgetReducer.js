/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { BudgetActionTypes } from '../constants/BudgetActionTypes';
import { dummy1 } from '../data/Presets';

let initialState = dummy1;

export default function Reducer(state = initialState, action) {

  switch(action.type) {
    case BudgetActionTypes.SELECT_PLAN:
      return state.set('activePlan', action.planId);

    case BudgetActionTypes.ADD_TRANSACTION:
      return state.setIn(['transactions', ]);

    default:
      return state;
  }
}
