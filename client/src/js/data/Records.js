/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { Record, List } from 'immutable';

export const User = new Record({
  id: undefined,
  firstName: '',
  lastName: '',
  email: '',
}, 'User');

export const Plan = new Record({
  id: undefined,
  name: '',
});

export const Permission = new Record({
  user: undefined,
  plan: undefined,
  accesses: List( ),
});

export const Tag = new Record({
  id: undefined,
  key: '',
});

export const Transaction = new Record({
  id: undefined,
  previous: undefined,
  amount: 0,
  category: undefined,
  tags: List( ),
}, 'Transaction');
