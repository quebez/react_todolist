import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InputBar from './components/input_bar';
import BasicList from './components/basic_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                text: '',
                id: ''
            }]
        }

        this.addItem('lol');
    }

    addItem(text) {
        const item = {
            text: text,
            id: Date.now()
        };

        console.log(this.state.items);

        this.setState({ items: this.state.items.concat([item]) });
    }


    render() {
        return (
            <div>
                <InputBar onEnterPress= { this.addItem }/>
                <BasicList items={ this.state.items }/>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));