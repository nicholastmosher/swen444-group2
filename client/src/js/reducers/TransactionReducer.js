/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { TransactionActionTypes } from '../constants/TransactionActionTypes';
import { Seq } from 'immutable';
import { Transaction } from '../data/Records';
import { transactions } from '../data/Presets';
import { newKey, entityIterator } from '../data/Utils';

const TransactionReducer = (state = transactions, action) => {

  switch(action.type) {

    case TransactionActionTypes.ADD_TRANSACTION:
      console.log("Adding transaction...");

      const t = new Transaction({
        id: newKey(state.get('transactions')).toString(),
        date: action.date,
        description: action.description,
        amount: action.amount,
        next: undefined,
        category: action.category,
        tags: action.tags,
      });

      const baseT = state.getIn([ 'transactions', action.baseTid ]);
      const lastTid = new Seq(entityIterator(state.get('transactions'), baseT)).last().id;

      // Add the new transaction to the transactions list.
      state = state.setIn([ 'transactions', t.id ], t);

      // Set the last transaction's 'next' reference to the new transaction.
      state = state.setIn([ 'transactions', lastTid, 'next' ], t.id);

      return state;

    case TransactionActionTypes.REMOVE_TRANSACTION:
      return state; //TODO implement

    case TransactionActionTypes.EDIT_TRANSACTION:
      return state; //TODO implement

    default:
      return state;
  }
};

export default TransactionReducer;
