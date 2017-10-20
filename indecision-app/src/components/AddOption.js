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
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleAppOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption;