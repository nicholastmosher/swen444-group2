/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { TransactionActionTypes } from '../constants/TransactionActionTypes';

export const addTag = (tag) => ({ type: TransactionActionTypes.ADD_TAG, tag });

export const addTransaction = (baseTid, date, description, amount, category) => dispatch => {
  // Adds the category as a tag.
  new Promise((resolve) => {
    dispatch(addTag(category));
    resolve();

  // Then dispatch the add transaction action.
  }).then(() => dispatch({
    type: TransactionActionTypes.ADD_TRANSACTION,
    baseTid,
    date,
    description,
    amount,
    category,
  }));
};

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
