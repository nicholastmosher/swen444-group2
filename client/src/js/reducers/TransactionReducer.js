/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { TransactionActionTypes } from '../constants/TransactionActionTypes';
import { transactions } from '../data/Presets';

const TransactionReducer = (state = transactions, action) => {

  switch(action.type) {

    case TransactionActionTypes.ADD_TRANSACTION:
      return state.setIn(['transactions', ]);

    case TransactionActionTypes.REMOVE_TRANSACTION:
      return state; //TODO implement

    case TransactionActionTypes.EDIT_TRANSACTION:
      return state; //TODO implement

    default:
      return state;
  }
};

export default TransactionReducer;
