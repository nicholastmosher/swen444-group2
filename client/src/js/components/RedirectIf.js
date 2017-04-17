/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * If the given condition is true, Redirect from the 'from' path to the 'to'
 * path instead of rendering the children. If the condition is false, then
 * render the children.
 *
 * @param condition When to redirect.
 * @param from Only redirect from this URL.
 * @param to Redirect to this URL.
 * @param children Render these children if the condition is false.
 * @returns {*} A Redirect if the condition is true, or the children components
 * otherwise.
 */
const RedirectIf = ({condition, from, to, children}) => {
  if (condition) return (<Redirect to={to} from={from} />);
  return children;
};

export default RedirectIf;
