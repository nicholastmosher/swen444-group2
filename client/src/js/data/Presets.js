/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { fromJS, List } from 'immutable';
import { User, Account, Plan, Permission, Tag, Transaction } from './Records';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

//set cookie if it does not exist
if(cookies.get('loggedin') == undefined) {
    const expiration = (new Date().getTime() + 30*60000);
    cookies.set('loggedin', { loggedin: false, userId: undefined }, { path: "/", Expires: expiration })
}
// temporary fix for a bug where after a refresh user information is reset so if userId was > 0 it would
// not load
else if(cookies.get('loggedin').userId != 0){
    const expiration = (new Date().getTime() + 30*60000);
    cookies.set('loggedin', { loggedin: false, userId: undefined }, { path: "/", Expires: expiration })
}

export const application = fromJS({
  title: 'Money Maid',
  userLoggedIn: cookies.get('loggedin').loggedin,
  activeAccount: cookies.get('loggedin').userId,
  accounts: {
    '0': Account({
      id: '0',
      user: '0',
      password: 'password12345',
    }),
  },
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
      baseTransaction: '0',
    }),
    '1': Plan({
      id: '1',
      name: 'Business Budget',
      baseTransaction: '3',
    }),
  },
  permissions: [
    Permission({ // John owns plan 0, "Personal Budget".
      user: '0',
      plan: '0',
      accesses: List([ 'Owner', 'Read', 'Write' ]),
    }),
    Permission({ // Jerry has read/write for plan 0, "Personal Budget".
      user: '1',
      plan: '0',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Permission({ // Judy has read-only for plan 0, "Personal Budget".
      user: '2',
      plan: '0',
      accesses: List([ 'Read' ]),
    }),
    Permission({ // Jane owns plan 1, "Business Budget".
      user: '3',
      plan: '1',
      accesses: List([ 'Owner', 'Read', 'Write' ]),
    }),
    Permission({ // Jack has read/write for plan 1, "Business Budget".
      user: '4',
      plan: '1',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Permission({ // Juniper has read/write for plan 1, "Business Budget".
      user: '5',
      plan: '1',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Permission({ // Jacqueline has read/write for plan 1, "Business Budget".
      user: '6',
      plan: '1',
      accesses: List([ 'Read', 'Write' ]),
    }),
    Permission({ // Jade has read-only for plan 1, "Business Budget".
      user: '7',
      plan: '1',
      accesses: List([ 'Read' ]),
    }),
    Permission({ // Jasper has read-only for plan 1, "Business Budget".
      user: '8',
      plan: '1',
      accesses: List([ 'Read' ]),
    }),
    Permission({ // Jordan has read-only for plan 1, "Business Budget".
      user: '9',
      plan: '1',
      accesses: List([ 'Read' ]),
    }),
  ],
});

export const transactions = fromJS({
  transactions: {
    '0': Transaction({
      id: '0',
      date: '03/05/10',
      description: 'Got Paid',
      amount: 1000.00,
      next: '1',
      category: '4',
      tags: List([ ]),
    }),
    '1': Transaction({
      id: '1',
      date: '03/12/10',
      description: 'Drove to Philly',
      amount: -34.22,
      next: '2',
      category: '1',
      tags: List([ ]),
    }),
    '2': Transaction({
      id: '2',
      date: '03/16/10',
      description: 'Bought a bike.',
      amount: -111.23,
      next: '8',
      category: '3',
      tags: List([ ]),
    }),
    '3': Transaction({
      id: '3',
      date: '03/05/17',
      description: 'Company Secured Contract - Initial Stipend',
      amount: 10000.00,
      next: '4',
      category: '4',
      tags: List([ ]),
    }),
    '4': Transaction({
      id: '4',
      date: '03/12/17',
      description: 'Paid Staff',
      amount: -945.00,
      next: '5',
      category: '5',
      tags: List([ ]),
    }),
    '5': Transaction({
      id: '5',
      date: '03/15/17',
      description: 'Sally Broke a Light Fixture',
      amount: -245.00,
      next: '6',
      category: '6',
      tags: List([ ]),
    }),
    '6': Transaction({
      id: '6',
      date: '03/17/17',
      description: 'Janitor Broke Leg - Medical Charge',
      amount: -2878.00,
      next: '7',
      category: '7',
      tags: List([ ]),
    }),
    '7': Transaction({
      id: '7',
      date: '03/24/17',
      description: 'Best Company in the US Award',
      amount: 2500.00,
      category: '8',
      tags: List([ ]),
    }),
    '8': Transaction({
      id: '8',
      date: '03/24/17',
      description: 'Birthday Gift',
      amount: 500.00,
      next: '9',
      category: '9',
      tags: List([ ]),
    }),
    '9': Transaction({
      id: '9',
      date: '03/29/17',
      description: 'Sam Broke Arm - Medical Bill',
      amount: -740.53,
      category: '10',
      tags: List([ ]),
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
    '5': Tag({
      id: '5',
      key: 'Payroll',
    }),
    '6': Tag({
      id: '6',
      key: 'Company Expense',
    }),
    '7': Tag({
      id: '7',
      key: 'Employee Expense',
    }),
    '8': Tag({
      id: '8',
      key: 'Governmental Grant',
    }),
    '9': Tag({
      id: '9',
      key: 'Gift',
    }),
    '10': Tag({
      id: '10',
      key: 'Medical',
    }),
  },
});
