class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: props.options
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            if(json){
                const options = JSON.parse(json);
                this.setState(()=> ({options}));
            }
        } catch(e){
            // Do nothing
        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }))
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value tp add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        return (
            <div>
                <Header subtitle="Put your life in the hands of a computer"/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                What Should I do?
            </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length ===0 && <p>Please add an option to get started</p>}
            {
                props.options
                    .map(option => <Option key={option} optionText={option}
                                           handleDeleteOption={props.handleDeleteOption}/>)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={() => { props.handleDeleteOption(props.optionText) }}>
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
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
            this.setState(() => ({error}));
        } else {
            e.target.elements.option.value = '';
        }

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
