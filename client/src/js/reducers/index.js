/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import AppReducer from './AppReducer';
import PlanReducer from './PlanReducer';
import TransactionReducer from './TransactionReducer';

const rootReducer = combineReducers({
  AppReducer,
  PlanReducer,
  TransactionReducer,
  routing,
});

export default rootReducer;
