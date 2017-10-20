import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    };

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

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }))
    };

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value tp add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleClearSelectedOption = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState( (prevState)=> ({
            selectedOption: option
        }));
    };

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
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;