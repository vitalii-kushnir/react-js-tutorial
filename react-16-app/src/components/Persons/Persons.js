import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((person, idx) => {
            return (
                <Person
                    click={() => this.props.clicked(idx)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(e) => this.props.changed(e, person.id)}/>
            )
        });
    }
}

export default Persons;