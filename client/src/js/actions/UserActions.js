/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { UserActionTypes } from '../constants/UserActionTypes';

export const editEmail = (userId, email) => ({type: UserActionTypes.EDIT_EMAIL, userId, email});
export const editName = (userId, name) => ({type: UserActionTypes.EDIT_NAME, userId, name});
