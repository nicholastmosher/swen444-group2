/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

export default function AppView(props) {
  // Pass container props to children.
  const children = React.Children.map(props.children, (child) => (
    React.cloneElement(child, {
      greeting: props.greeting,
      actions: props.actions
    })
  ));
  return (
    <div>
      {children}
    </div>
  );
}
