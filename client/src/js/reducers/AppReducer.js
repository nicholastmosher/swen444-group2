/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { AppActionTypes } from '../constants/AppActionTypes';
import { newKey } from '../data/Utils';
import { User, Account } from '../data/Records';
import { application } from '../data/Presets';
import Cookies from 'universal-cookie';

const AppReducer = (state = application, action) => {

  switch(action.type) {

    case AppActionTypes.LOG_IN: {
      console.log("REDUCER LOG IN");
      const user = state.get('users').find((v, k) => v.email === action.email);
      const account = state.get('accounts').find((v, k) => v.user === user.id);

      const cookies = new Cookies();
      cookies.set('loggedin', { loggedin: true, userId: account.id }, { path: "/" });

      return state.set('userLoggedIn', true).set('activeAccount', account.id);
    }

    case AppActionTypes.LOG_OUT: {
        const cookies = new Cookies();
        cookies.set('loggedin', { loggedin: false, userId: undefined }, { path: "/" });
        return state.set('userLoggedIn', false).set('activeAccount', '');
    }

    case AppActionTypes.CREATE_ACCOUNT: {
      console.log("REDUCER CREATE ACCOUNT");
      const userId = newKey(state.get('users'));
      const user = User({
        id: userId,
        firstName: action.first,
        lastName: action.last,
        email: action.email,
      });
      const accountId = newKey(state.get('accounts'));
      const account = Account({
        id: accountId,
        user: userId,
        password: action.password,
      });
      return state.setIn([ 'users', userId ], user).setIn([ 'accounts', accountId ], account);
    }

    case AppActionTypes.DELETE_ACCOUNT:
      return state; //TODO implement

    default:
      return state;
  }
};

export default AppReducer;
