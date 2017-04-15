/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(history) {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        createLogger({
          level: 'info',
          collapsed: true
        }),
        thunk,
      )
    )
  );
}
