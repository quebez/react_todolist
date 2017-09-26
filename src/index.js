import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InputBar from './components/input_bar';
import BasicList from './components/basic_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div>
                <InputBar
                    onEnterPress={item => this.setState({ items: this.state.items.concat([item]) })}
                />
                <br />
                <BasicList
                    items={this.state.items}
                    deleteItem={event => {
                        this.setState({
                            items: this.state.items.filter(element => element.id != (/\S*\$([0-9]*)/g).exec(event.target.getAttribute('data-reactid'))[1])
                        });
                    }}
                />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));