/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { AppActionTypes } from '../constants/AppActionTypes';
import { application } from '../data/Presets';

const AppReducer = (state = application, action) => {

  switch(action.type) {

    case AppActionTypes.LOG_IN:
      console.log("Tried logging in with: ");
      console.log(action.email);
      console.log(action.password);
      return state; //TODO implement

    case AppActionTypes.LOG_OUT:
      return state; //TODO implement

    case AppActionTypes.CREATE_ACCOUNT:
      return state; //TODO implement

    case AppActionTypes.DELETE_ACCOUNT:
      return state; //TODO implement

    default:
      return state;
  }
};

export default AppReducer;
