import React from 'react';
import classes from'./Person.css';

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            {/*example of two ways binding*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Person;