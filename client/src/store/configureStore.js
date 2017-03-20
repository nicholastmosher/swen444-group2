/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(applyMiddleware(router, logger));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
