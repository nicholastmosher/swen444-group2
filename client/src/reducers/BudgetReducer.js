/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { Map, List } from 'immutable';
import { BudgetActionTypes } from '../constants/BudgetActionTypes';

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
      firstName: 'Jerry',
      lastName: 'Moe',
      email: 'jerry@example.com'
    }),
    '2': Map({
      id: '2',
      firstName: 'Judy',
      lastName: 'Dooley',
      email: 'judy@example.com'
    }),
    '3': Map({
      id: '3',
      firstName: 'Jane',
      lastName: 'Dudley',
      email: 'jane@example.com'
    }),
    '4': Map({
      id: '4',
      firstName: 'Jack',
      lastName: 'Son',
      email: 'jack@example.com'
    }),
    '5': Map({
      id: '5',
      firstName: 'Juniper',
      lastName: 'Jupiter',
      email: 'juniper@example.com'
    }),
    '6': Map({
      id: '6',
      firstName: 'Jacqueline',
      lastName: 'McGhee',
      email: 'jacqueline@example.com'
    }),
    '7': Map({
      id: '7',
      firstName: 'Jade',
      lastName: 'Ruby',
      email: 'jade@example.com'
    }),
    '8': Map({
      id: '8',
      firstName: 'Jasper',
      lastName: 'Madeline',
      email: 'jasper@example.com'
    }),
    '9': Map({
      id: '9',
      firstName: 'Jordan',
      lastName: 'Smith',
      email: 'jordan@example.com'
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
    Map({ // John owns plan 0, "Personal Budget".
      user: '0',
      plan: '0',
      accesses: List([ 'Owner', 'Read', 'Write' ]),
    }),
    Map({ // Jerry has read/write for plan 0, "Personal Budget".
      user: '1',
      plan: '0',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Map({ // Judy has read-only for plan 0, "Personal Budget".
      user: '2',
      plan: '0',
      accesses: List([ 'Read' ]),
    }),
    Map({ // Jane owns plan 1, "Business Budget".
      user: '3',
      plan: '1',
      accesses: List([ 'Owner', 'Read', 'Write' ]),
    }),
    Map({ // Jack has read/write for plan 1, "Business Budget".
      user: '4',
      plan: '1',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Map({ // Juniper has read/write for plan 1, "Business Budget".
      user: '5',
      plan: '1',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Map({ // Jacqueline has read/write for plan 1, "Business Budget".
      user: '6',
      plan: '1',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Map({ // Jade has read-only for plan 1, "Business Budget".
      user: '7',
      plan: '1',
      accesses: List([ 'Read' ]),
    }),
    Map({ // Jasper has read-only for plan 1, "Business Budget".
      user: '8',
      plan: '1',
      accesses: List([ 'Read' ]),
    }),
    Map({ // Jordan has read-only for plan 1, "Business Budget".
      user: '9',
      plan: '1',
      accesses: List([ 'Read' ]),
    }),
  ]),
});

export default function Reducer(state = initialState, action) {

  switch(action.type) {
    case BudgetActionTypes.SELECT_PLAN:
      return state.set('activePlan', action.planId);

    default:
      return state;
  }
}
