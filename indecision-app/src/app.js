class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(option){

        if(!option){
            return 'Enter valid value tp add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        return (
            <div>
                <Header title="Indecision" subtitle="Put your life in the hands of a computer"/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
                    What Should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
    }

    renderOptions() {
        return this.props.options.map(option => <Option key={option} optionText={option}/>)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.renderOptions()}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.optionText}</div>
        );
    }
}

class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAppOption = this.handleAppOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAppOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        if (error) {
            this.setState(()=>{
                return { error }
            });
        }

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleAppOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


