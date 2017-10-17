import React, { Component } from 'react';

class InputBar extends Component {
    state = { term: '' };

    HandleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.onAddItemClick(
                {
                    text: this.state.term,
                    id: Date.now()
                });
            this.setState({ term: '' });
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                    onKeyPress={this.HandleKeyPress}
                    className="form-control"
                    id="inputItem"
                    placeholder="Write your stuff here..." />
            </div>
        );
    }
}

export default InputBar;