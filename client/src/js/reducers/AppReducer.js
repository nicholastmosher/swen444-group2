/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { AppActionTypes } from '../constants/AppActionTypes';
import { application } from '../data/Presets';

const AppReducer = (state = application, action) => {

  switch(action.type) {

    case AppActionTypes.LOG_IN:
      const user = state.get('users').find((v, k) => v.email === action.email);
      const account = state.get('accounts').find((v, k) => v.user === user.id);
      return state.set('userLoggedIn', true).set('activeAccount', account.id);

    case AppActionTypes.LOG_OUT:
      return state.set('userLoggedIn', false).set('activeAccount', '');

    case AppActionTypes.CREATE_ACCOUNT:
      return state; //TODO implement

    case AppActionTypes.DELETE_ACCOUNT:
      return state; //TODO implement

    default:
      return state;
  }
};

export default AppReducer;
