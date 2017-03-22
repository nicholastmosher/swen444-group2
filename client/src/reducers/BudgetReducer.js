/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { Map } from 'immutable';
import { ActionTypes } from '../constants/ActionTypes';

let initialState = Map({
  title: "Money Maid"
});

export default function Reducer(state = initialState, action) {

  switch(action.type) {
    case ActionTypes.SAY_HELLO:
      return state.set('greeting', "Hello, " + action.name + "!");

    case ActionTypes.SAY_GOODBYE:
      return state.set('greeting', "Goodbye " + action.name + "!");

    default:
      return state;
  }
}
