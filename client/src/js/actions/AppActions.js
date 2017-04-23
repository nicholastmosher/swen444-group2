/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { AppActionTypes } from '../constants/AppActionTypes';

export const logIn = (email, password) => ({type: AppActionTypes.LOG_IN, email, password});
export const logOut = ( ) =>              ({type: AppActionTypes.LOG_OUT});

export const createAccount = (first, last, email, password) => dispatch => (
  new Promise((resolve) => {
    dispatch({
      type: AppActionTypes.CREATE_ACCOUNT,
      first,
      last,
      email,
      password
    });
    resolve();
  }).then(() => {
    dispatch(logIn(email, password));
  })
);

export const deleteAccount = (accountId) => ({type: AppActionTypes.DELETE_ACCOUNT, accountId});
