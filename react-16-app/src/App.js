import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [{
            name: 'Vitalii', age: 29, id: '1'
        }, {
            name: 'Jane', age: 26, id: '2'
        }],
        showPersons: false, id: '3'
    };

    /**
     * Example of the two weays binging
     */
    nameChangedHandler = (e, id) => {
        // two ways binding of the components
        const personIdx = this.state.persons.findIndex( p => p.id === id);
        const person = {
            ...this.state.persons[personIdx],
            name: e.target.value
        };

        const persons = [...this.state.persons];
        persons[personIdx] = person;
        this.setState({ persons });
    };

    togglePersonsHandler = () => {
        const dowsShow = this.state.showPersons;
        this.setState({showPersons : !dowsShow});
    };

    deletePorsonHandler = (idx) => {
        const persons = [...this.state.persons];
        persons.splice(idx, 1);
        this.setState({persons});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        // conditional rendering of the content
        if(this.state.showPersons){
            persons = (
              <div>
                  {
                      // output lists of elements
                      this.state.persons.map( (person, idx) => {
                        return (
                            <Person key={person.id}
                                    click =  { () => this.deletePorsonHandler(idx) }
                                    name={person.name}
                                    age={person.age}
                                    changed={(e) => this.nameChangedHandler(e, person.id)}/>
                        )
                      })
                  }
              </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi. I am a React 16 App</h1>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
