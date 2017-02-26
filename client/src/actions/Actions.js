/**
 * Defines action objects for the application.
 *
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { ActionTypes } from '../constants/ActionTypes';

export const sayHello = (name) => ({type: ActionTypes.SAY_HELLO, name});
export const sayGoodbye = (name) => ({type: ActionTypes.SAY_GOODBYE, name});

/**
 * Exports an object containing all of the actions.
 */
export default {
    sayHello,
    sayGoodbye,
};
