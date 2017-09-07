import React, { Component } from 'react';

class InputBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    _HandleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onEnterPress(this.state.term);
        }
    }

    render() {
        return (
            <div>
                <input
                    value={ this.state.term }
                    onChange={ event => this.setState({ term: event.target.value }) }
                    onKeyPress={ this._HandleKeyPress }
                    className="form-control" 
                    id="inputItem" 
                    placeholder="Write your stuff here..."/>
            </div>
        );
    }
}

export default InputBar;