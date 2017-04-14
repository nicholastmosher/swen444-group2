/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { UserActionTypes } from '../constants/UserActionTypes';
import { users } from '../data/Presets';

const UserReducer = (state = users, action) => {

  switch(action.type) {

    case UserActionTypes.EDIT_NAME:
      return state; //TODO implement

    case UserActionTypes.EDIT_EMAIL:
      return state; //TODO implement

    default:
      return state;
  }
};

export default UserReducer;
