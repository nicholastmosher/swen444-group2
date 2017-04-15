/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { TransactionActionTypes } from '../constants/TransactionActionTypes';
import { List } from 'immutable';

export const addTransaction = (baseTid, date, description, amount, category, tags = List( )) => ({
  type: TransactionActionTypes.ADD_TRANSACTION,
  baseTid,
  date,
  description,
  amount,
  category,
  tags,
});

export const removeTransaction = (planId) => ({
  type: TransactionActionTypes.REMOVE_TRANSACTION,
  planId,
});

export const editTransaction = (planId, amount, category, tags) => ({
  type: TransactionActionTypes.EDIT_TRANSACTION,
  planId,
  amount,
  category,
  tags,
});
