/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { Map } from 'immutable';
import { ActionTypes } from '../constants/ActionTypes';

let initialState = Map({
  title: 'Money Maid',
  activePlan: '0',
  plans: Map({
    '0': Map({
      id: '0',
      name: 'Personal Budget',
    }),
    '1': Map({
      id: '1',
      name: 'Business Budget',
    })
  }),
});

export default function Reducer(state = initialState, action) {

  switch(action.type) {
    case ActionTypes.SAY_HELLO:
      return state.set('greeting', 'Hello, ' + action.name + '!');

    case ActionTypes.SAY_GOODBYE:
      return state.set('greeting', 'Goodbye ' + action.name + '!');

    default:
      return state;
  }
}
