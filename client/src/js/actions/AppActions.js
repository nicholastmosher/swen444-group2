/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { AppActionTypes } from '../constants/AppActionTypes';

export const logIn = (accountId, password) =>     ({type: AppActionTypes.LOG_IN, accountId, password});
export const logOut = ( ) =>                      ({type: AppActionTypes.LOG_OUT});
export const createAccount = (email, password) => ({type: AppActionTypes.CREATE_ACCOUNT, email, password});
export const deleteAccount = (accountId) =>       ({type: AppActionTypes.DELETE_ACCOUNT, accountId});
