/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';

export default function AppView(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <button onClick={()=>props.actions.sayHello("Bob")}>Say Hello!</button>
            <button onClick={()=>props.actions.sayGoodbye("Bob")}>Say Goodbye!</button>
        </div>
    );
}
