import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InputBar from './components/input_bar';
import BasicList from './components/basic_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            items: [
                {
                    text: 'Put this on web',
                    id: 'ptow'
                }
            ]
        };
    }
    
    render() {
        return (
            <div>
                <InputBar />
                <BasicList items={ this.state.items }/>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));