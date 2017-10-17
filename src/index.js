import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InputBar from './components/input_bar';
import BasicList from './components/basic_list';

class App extends Component {
    state = { items: [] };
    
    onDeleteClick = () => {
        this.setState(this.deleteItem);
    }

    onAddItemClick = (item) => {
        this.setState(this.addItem(item));
    }

    deleteItem(state) {
        const newListItems = this.state.items.filter(element => element.id != (/\S*\$([0-9]*)/g).exec(event.target.getAttribute('data-reactid'))[1])
        return { ...state, items: newListItems};
    }

    addItem(item, state) {
        return {...state, items: this.state.items.concat([item])};
    }


    render() {
        return (
            <div>
                <InputBar
                    onAddItemClick={this.onAddItemClick}
                />
                <br />
                <BasicList
                    items={this.state.items}
                    onDeleteClick={this.onDeleteClick}
                />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));