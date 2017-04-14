/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { TransactionActionTypes } from '../constants/TransactionActionTypes';

export const addTransaction = (planId, amount, category, tags) => ({type: TransactionActionTypes.ADD_TRANSACTION, planId, amount, category, tags});
export const removeTransaction = (planId) => ({type: TransactionActionTypes.REMOVE_TRANSACTION, planId});
export const editTransaction = (planId, amount, category, tags) => ({type: TransactionActionTypes.REMOVE_TRANSACTION, planId, amount, category, tags});
