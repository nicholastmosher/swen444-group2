/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import BudgetReducer from './BudgetReducer';

const rootReducer = combineReducers({
  BudgetReducer,
  routing,
});

export default rootReducer;
