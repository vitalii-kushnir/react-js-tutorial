import React from 'react';
import './Person.css';

const Person = (props) => {

    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I am {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            {/*example of two ways binding*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};


export default Person;