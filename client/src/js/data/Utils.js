/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { OrderedMap } from 'immutable';

/**
 * Returns a Map with keys of Transactions and values denoting the balance
 * of the account after applying all transactions up to the current one.
 *
 * @param TReducer
 * @param baseT
 * @returns {*|OrderedMap<K, V>|OrderedMap<string, V>}
 */
export const getTransactions = (TReducer, baseT) => {
  let transactions = OrderedMap( );
  let p, t = { next: baseT };
  while (t = TReducer.getIn([ 'transactions', t.next ])) {
    //t = t.set('tags', t.tags.map(tagId => TReducer.getIn([ 'tags', tagId, 'key' ])));
    t = t.set('category', TReducer.getIn([ 'tags', t.category, 'key' ]));
    transactions = transactions.set(t, (t.amount + (p ? transactions.get(p) : 0)));
    p = t;
  }
  return transactions;
};

export const getMostRecentTransactions = (TReducer, baseT, count) => {

  let AllTransactions = getTransactions(TReducer, baseT);
  return AllTransactions.reverse().slice(0, count);

};

/**
 * Given a sequence of string-appendable items, returns a string.
 * @param sequence The sequence to transform into comma-separated.
 * @param space True to add a space between items, false for no space.
 * @returns {string}
 */
export const toCSV = (sequence, space = true) => {
  if (!sequence) return '';
  if (sequence.isEmpty()) return '';
  let string = '';
  sequence.butLast().forEach(e => string += (e + (space ? ', ' : ',')));
  string += sequence.last();
  return string;
};

/**
 * Given an immutable js map with integer keys, returns a key one greater than
 * the last key of the map.
 * @param keySeq
 * @returns {*}
 */
export const newKey = (keySeq) => {
  if (!keySeq) return undefined;
  if (keySeq.isEmpty()) return 0;
  return parseInt(keySeq.maxBy(t => parseInt(t.id)).id) + 1;
};

/**
 * Returns a JS iterator beginning at the entity given by 'baseEntity'.
 * The entities must be immutable.js Maps (or Records) with a "next" attribute
 * which stores the ID of the next entity, which is stored in 'entities'.
 *
 * 'Entities' must be an immutable.js Map with entries of the form
 * [id, entity].
 *
 * @param entities The Map containing keyed entities to iterate through.
 * @param baseEntity The entity to begin iterating with.
 */
export const entityIterator = (entities, baseEntity) => {
  let e = baseEntity;
  return {
    next: () => {
      if (e) {
        let r = {value: e, done: false};
        e = entities.get(e.next);
        return r;
      }
      return {done: true};
    },
  };
};

export const getGraphData = (TReducer, baseT) => {
  return aggregateCategoryData(TReducer, baseT);
};

//Helper function for getting transaction data as a list of categories and how much
//is in each category
export const aggregateCategoryData = (TReducer, baseT) => {
  let data = [['Category', 'Amount']];
  let categories = {};

  let t = { next: baseT };
  while (t = TReducer.getIn([ 'transactions', t.next ])) {

    t = t.set('tags', t.tags.map(tagId => TReducer.getIn([ 'tags', tagId, 'key' ])));
    t = t.set('category', TReducer.getIn([ 'tags', t.category, 'key' ]));

    if (t.category in categories){
      categories[t.category] += Math.abs(t.amount);
    }
    else {
      categories[t.category] = Math.abs(t.amount);
    }

  }

  for (var c in categories){
    data.push([c, categories[c]]);
  }
  
  return data;
};

export const getBalanceData = (TReducer, baseT) => {
  let data = { 'Income': 0, 'Expense': 0 };

  let t = { next: baseT };
  while (t = TReducer.getIn([ 'transactions', t.next ])) {

    if (t.amount > 0) {
      data.Income += t.amount;
    }
    else {
      // EXPENSES WILL ALWAYS BE NEGATIVE VALUES
      data.Expense += t.amount;
    }

    //finally calculate net
    data['Net'] = data.Income + data.Expense;

  }

  return data;
};

export const getIncomeData = (TReducer, baseT) => {
    let income = [['Category', 'Amount']];

    let t = { next: baseT };
    while (t = TReducer.getIn([ 'transactions', t.next ])) {
        t = t.set('tags', t.tags.map(tagId => TReducer.getIn([ 'tags', tagId, 'key' ])));
        t = t.set('category', TReducer.getIn([ 'tags', t.category, 'key' ]));

        if (t.amount > 0) {
            income.push([t.category, t.amount])
        }
    }
    return income;
};

export const getExpenseData = (TReducer, baseT) => {
    let expense = [['Category', 'Amount']];

    let t = { next: baseT };
    while (t = TReducer.getIn([ 'transactions', t.next ])) {
        t = t.set('tags', t.tags.map(tagId => TReducer.getIn([ 'tags', tagId, 'key' ])));
        t = t.set('category', TReducer.getIn([ 'tags', t.category, 'key' ]));

        if (t.amount < 0) {
            expense.push([t.category, Math.abs(t.amount)])
        }
    }
    return expense;
};
