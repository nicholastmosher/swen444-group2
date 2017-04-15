/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { fromJS } from 'immutable';
import { User, Account, Plan, Permission, Tag, Transaction } from './Records';

export const application = fromJS({
  title: 'Money Maid',
  userLoggedIn: false,
  activeAccount: undefined,
});

export const users = fromJS({
  account: Account({
    id: 0,
    user: 0,
    password: 'password12345',
  }),
  users: {
    '0': User({
      id: '0',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    }),
    '1': User({
      id: '1',
      firstName: 'Jerry',
      lastName: 'Moe',
      email: 'jerry@example.com'
    }),
    '2': User({
      id: '2',
      firstName: 'Judy',
      lastName: 'Dooley',
      email: 'judy@example.com'
    }),
    '3': User({
      id: '3',
      firstName: 'Jane',
      lastName: 'Dudley',
      email: 'jane@example.com'
    }),
    '4': User({
      id: '4',
      firstName: 'Jack',
      lastName: 'Son',
      email: 'jack@example.com'
    }),
    '5': User({
      id: '5',
      firstName: 'Juniper',
      lastName: 'Jupiter',
      email: 'juniper@example.com'
    }),
    '6': User({
      id: '6',
      firstName: 'Jacqueline',
      lastName: 'McGhee',
      email: 'jacqueline@example.com'
    }),
    '7': User({
      id: '7',
      firstName: 'Jade',
      lastName: 'Ruby',
      email: 'jade@example.com'
    }),
    '8': User({
      id: '8',
      firstName: 'Jasper',
      lastName: 'Madeline',
      email: 'jasper@example.com'
    }),
    '9': User({
      id: '9',
      firstName: 'Jordan',
      lastName: 'Smith',
      email: 'jordan@example.com'
    }),
  },
});

export const plans = fromJS({
  activePlan: '0',
  plans: {
    '0': Plan({
      id: '0',
      name: 'Personal Budget',
    }),
    '1': Plan({
      id: '1',
      name: 'Business Budget',
    }),
  },
  permissions: [
    Permission({ // John owns plan 0, "Personal Budget".
      user: '0',
      plan: '0',
      accesses: [ 'Owner', 'Read', 'Write' ],
    }),
    Permission({ // Jerry has read/write for plan 0, "Personal Budget".
      user: '1',
      plan: '0',
      accesses: [ 'Read', 'Write' ],
    }),
    Permission({ // Judy has read-only for plan 0, "Personal Budget".
      user: '2',
      plan: '0',
      accesses: [ 'Read' ],
    }),
    Permission({ // Jane owns plan 1, "Business Budget".
      user: '3',
      plan: '1',
      accesses: [ 'Owner', 'Read', 'Write' ],
    }),
    Permission({ // Jack has read/write for plan 1, "Business Budget".
      user: '4',
      plan: '1',
      accesses: [ 'Read', 'Write' ],
    }),
    Permission({ // Juniper has read/write for plan 1, "Business Budget".
      user: '5',
      plan: '1',
      accesses: [ 'Read', 'Write' ],
    }),
    Permission({ // Jacqueline has read/write for plan 1, "Business Budget".
      user: '6',
      plan: '1',
      accesses: [ 'Read', 'Write' ],
    }),
    Permission({ // Jade has read-only for plan 1, "Business Budget".
      user: '7',
      plan: '1',
      accesses: [ 'Read' ],
    }),
    Permission({ // Jasper has read-only for plan 1, "Business Budget".
      user: '8',
      plan: '1',
      accesses: [ 'Read' ],
    }),
    Permission({ // Jordan has read-only for plan 1, "Business Budget".
      user: '9',
      plan: '1',
      accesses: [ 'Read' ],
    }),
  ],
});

export const transactions = fromJS({
  transactions: {
    '0': Transaction({
      id: '0',
      previous: null,
      amount: 1000.00,
      category: '4',
      tags: [],
    }),
    '1': Transaction({
      id: '1',
      previous: '0',
      amount: -34.22,
      category: '1',
      tags: ['2'],
    }),
    '2': Transaction({
      id: '2',
      previous: '1',
      amount: -111.23,
      category: '3',
      tags: ['4'],
    }),
  },
  tags: {
    '0': Tag({
      id: '0',
      key: 'Groceries',
    }),
    '1': Tag({
      id: '1',
      key: 'Gas',
    }),
    '2': Tag({
      id: '2',
      key: 'Entertainment',
    }),
    '3': Tag({
      id: '3',
      key: 'Recreation',
    }),
    '4': Tag({
      id: '4',
      key: 'Income',
    }),
  },
});
