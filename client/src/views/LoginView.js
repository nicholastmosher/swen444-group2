/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

export default function LoginView(props) {
  console.log("LoginView");
  console.log(props);
  return (
    <div>
      <h1>LoginView</h1>
      <h2>{props.greeting}</h2>
      <button onClick={()=>props.actions.sayHello("Bob")}>Say Hello!</button>
      <button onClick={()=>props.actions.sayGoodbye("Bob")}>Say Goodbye!</button>
    </div>
  );
}
