/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { Map, List } from 'immutable';
import { ActionTypes } from '../constants/ActionTypes';

let initialState = Map({
  title: 'Money Maid',
  users: Map({
    '0': Map({
      id: '0',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    }),
    '1': Map({
      id: '1',
      firstName: 'Mary',
      lastName: 'Moe',
      email: 'mary@example.com'
    }),
    '2': Map({
      id: '2',
      firstName: 'Judy',
      lastName: 'Dooley',
      email: 'judy@example.com'
    }),
  }),
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
  permissions: List([
    Map({ // John owns plan 0.
      user: '0',
      plan: '0',
      accesses: List([ 'Owner', 'Read', 'Write' ]),
    }),
    Map({ // Mary has read/write for plan 0.
      user: '1',
      plan: '0',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Map({ // Judy has read-only for plan 0.
      user: '2',
      plan: '0',
      accesses: List([ 'Read' ]),
    }),
  ]),
  transactions: Map({
    '0': Map({
      id: '0',
      description: ''
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
