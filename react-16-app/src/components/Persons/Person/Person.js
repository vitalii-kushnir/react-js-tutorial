import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount(){
        this.inputElement.focus();
        console.log('[Person.js] Inside componentDidMount');
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                {/*example of two ways binding*/}
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </WithClass>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;