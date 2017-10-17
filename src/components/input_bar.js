import React, { Component } from 'react';

class InputBar extends Component {
    state = { term: '' };

    HandleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const currentDate = new Date();
            this.props.onAddItemClick(
                {
                    text: this.state.term,
                    timeCreated: this.parseTime(currentDate),
                    id: currentDate.getTime()
                });
            this.setState({ term: '' });
        }
    }

    parseTime = (date) => {
        return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`;
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