/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { Record, List } from 'immutable';

/**
 * A Record for describing a User of the MoneyMaid application. This holds only
 * the data that is public for other users to know as well: the names and the
 * email. To 'log in' a user, it must have a corresponding "account" object
 * to wrap it.
 *
 * A User is necessary to represent "collaborators".
 *
 * @param id: The ID of this User, to be used as a primary key in storage.
 * @param firstName: The first name of the User.
 * @param lastName: The last name of the User.
 * @param email: The email of the User.
 */
export const User = new Record({
  id: undefined,
  firstName: '',
  lastName: '',
  email: '',
}, 'User');

/**
 * An Account wraps a User and adds extra information that is only necessary
 * to know when logging in as that User, such as their password.
 *
 * @param id: The ID of this Account.
 * @param user: A Foreign Key to the ID of the User this Account wraps.
 * @param password: The login password for this Account.
 */
export const Account = new Record({
  id: undefined,
  user: undefined,
  password: '',
});

/**
 * A Plan acts as an anchor for Transactions to relate to. Similarly,
 * Permissions can tie together a Plan and users who have access to that plan.
 * Users that have access to a Plan can also access the Transactions related
 * to that plan.
 *
 * @param id: The ID of this financial Plan.
 * @param name: The name or title of this Plan.
 * @param baseTransaction: The ID of the first Transaction of this Plan.
 */
export const Plan = new Record({
  id: undefined,
  name: '',
  baseTransaction: undefined,
});

/**
 * A Permission relates a single User to a single Plan, granting that User
 * a certain level of access to that Plan (e.g. read, write). Plan ownership
 * is a type of Permission, and thus there will be at least one Permission
 * for every existing Plan.
 *
 * @param collaborator: The ID of a User who is being granted permissions.
 * @param plan: The ID of the Plan which this Permission grants access for.
 * @param accesses: A List of permissions (read, write, etc.) granted.
 */
export const Permission = new Record({
  user: undefined,
  plan: undefined,
  accesses: List( ),
});

/**
 * A tag is a means to categorize and sort Transactions. Each Tag has a key,
 * which represents the 'property' or 'category' that is shared by Transactions
 * with that Tag.
 *
 * @param id: The ID of this Tag item.
 * @param key: The human-readable key representing a category or property.
 */
export const Tag = new Record({
  id: undefined,
  key: '',
});

/**
 * A Transaction represents a change in balance of a Plan.
 *
 * New Plans begin with a balance of $00.00. The first Transaction made for
 * a plan will have a 'next' value of undefined, and an 'amount' of 0.
 * Each subsequent Transaction will hold the ID of the next Transaction in its
 * 'next' attribute.
 *
 * The current balance of a Plan can be calculated by beginning at the Plan's
 * initial Transaction and walking forward through linked Transactions until
 * reaching the end, accumulating the changes in balance ('amount') along the
 * way.
 *
 * @param id: The ID of this Transaction.
 * @param next: The ID of the next Transaction for this plan.
 * @param amount: The amount by which this Transaction changes the balance.
 * @param category: An ID of the Tag representing this Transaction's category.
 * @param tags: A list of Tag IDs which can help to search for this Transaction.
 */
export const Transaction = new Record({
  id: undefined,
  next: undefined,
  amount: 0,
  category: undefined,
  tags: List( ),
}, 'Transaction');
