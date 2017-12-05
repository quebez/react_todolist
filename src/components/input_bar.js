import React, { Component } from 'react';

class InputBar extends Component {
    state = { term: '' };

    HandleSubmitEvent = (event) => {
        event.preventDefault();
        const currentDate = new Date();
        this.props.onAddItemClick({
                text: this.state.term,
                timeCreated: this.parseTime(currentDate),
                id: currentDate.getTime(),
                ticked: false
            }, 1);
        this.setState({ term: '' });
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
            <form onSubmit={this.HandleSubmitEvent.bind(this)}>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                    className="form-control input-bar"
                    id="inputItem"
                    placeholder="Write your stuff here..." />
            </form>
        );
    }
}

export default InputBar;