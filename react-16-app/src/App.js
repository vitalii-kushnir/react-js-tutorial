import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [{
            name: 'Vitalii', age: 29
        }, {
            name: 'Jane', age: 26
        }]
    };

    switchNameHandler  = (newName) => {
        this.setState({
            persons: [{
                name: 'Vitalii', age: 29
            }, {
                name: newName, age: 26
            }]
        })
    };

    /**
     * Example of the two weays binging
     */
    nameChangedHandler = (e) => {
        // two ways binding of the components
        e.preventDefault();
        this.setState({
            persons: [{
                name: 'Vitalii', age: 29
            }, {
                name: e.target.value, age: 26
            }]
        })
    };

    render() {
        const style = {
            backgroundColor : 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi. I am a React 16 App</h1>
                <button style={style}
                    onClick={this.switchNameHandler.bind(this, 'User')}>Switch Name</button>
                <Person
                    click={this.switchNameHandler.bind(this, 'Max')}
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>My Hobbies: TV</Person>
                <Person
                    changed={this.nameChangedHandler}
                    click={() => this.switchNameHandler('Kusha')}
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}/>
            </div>
        );
    }
}

export default App;
