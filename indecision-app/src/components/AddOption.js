import React from 'react';

class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAppOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        if (error) {
            this.setState(() => ({error}));
        } else {
            e.target.elements.option.value = '';
        }

    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}

                <form className="add-option" onSubmit={this.handleAppOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;