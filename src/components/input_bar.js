import React, { Component } from 'react';

class InputBar extends Component {
    state = { term: '' };

    HandleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const currentDate = new Date();
            this.props.onAddItemClick({
                    text: this.state.term,
                    timeCreated: this.parseTime(currentDate),
                    id: currentDate.getTime(),
                    ticked: false
                }, 1);
            this.setState({ term: '' });
        }
    }

    parseTime = (date) => {
        const addZero = (number) => {
            return number < 10 ? '0'+number : number;
        }

        return `
            ${addZero(date.getHours())} : 
            ${addZero(date.getMinutes())} : 
            ${addZero(date.getSeconds())}
        `;
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                    onKeyPress={this.HandleKeyPress}
                    className="form-control input-bar"
                    id="inputItem"
                    placeholder="Write your stuff here..." />
            </div>
        );
    }
}

export default InputBar;