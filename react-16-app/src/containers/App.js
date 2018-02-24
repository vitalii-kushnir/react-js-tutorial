import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    state = {
        persons: [{
            name: 'Vitalii', age: 29, id: '1'
        }, {
            name: 'Jane', age: 26, id: '2'
        }, {
            name: 'Bob', age: 26, id: '3'
        }],
        showPersons: false, id: '3',
        toggleClicked: 0
    };

    /**
     * Example of the two weays binging
     */
    nameChangedHandler = (e, id) => {
        // two ways binding of the components
        const personIdx = this.state.persons.findIndex(p => p.id === id);
        const person = {
            ...this.state.persons[personIdx],
            name: e.target.value
        };

        const persons = [...this.state.persons];
        persons[personIdx] = person;
        this.setState({persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    };

    deletePersonHandler = (idx) => {
        const persons = [...this.state.persons];
        persons.splice(idx, 1);
        this.setState({persons});
    };


    render() {
        console.log('[App.js] Inside render');
        let persons = null;

        // conditional rendering of the content
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        }

        return (
            <WithClass classes={classes.App}>
                <button onClick={() => {
                    this.setState({showPersons: true})
                }}>Show Persons
                </button>
                <Cockpit appTitle={this.props.title}
                         showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         clicked={this.togglePersonsHandler}/>
                {persons}
            </WithClass>
        );
    }
}

export default App;
