import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import InputBar from './components/input_bar';
import List from './components/list';

class App extends Component {
    state = { 
        items: [],
        tickedItems: []
    };
    

    onDeleteClick = () => {
        this.setState(this.deleteItem);
    }

    onAddItemClick = (item) => {
        this.setState(this.addItem(item));
    }

    onTickClick = () => {
        this.setState(this.tickItem);
    }

    //TODO: Delete doesn't work on tickedItems
    deleteItem(state) {
        const newListItems = this.state.items.filter(element => element.id != (/\S*\$([0-9]*)/g).exec(event.target.getAttribute('data-reactid'))[1]);
        return { ...state, items: newListItems};
    }

    addItem(item, state) {
        return {...state, items: update(this.state.items, {$push: [item]})};
    }

    //TODO: Make untick real
    tickItem(state) {
        let item;
        item = this.state.items.filter(element => element.id == (/\S*\$([0-9]*)/g).exec(event.target.getAttribute('data-reactid'))[1])[0];
        item.ticked = true;
        this.onDeleteClick(event);
        return {...state, tickedItems: update(this.state.tickedItems, {$unshift: [item]})}
    }

    render() {
        return (
            <div>
                <InputBar
                    onAddItemClick={this.onAddItemClick}
                />
                <br />
                <List
                    items={this.state.items}
                    onDeleteClick={this.onDeleteClick}
                    onTickClick={this.onTickClick}
                />
                <List
                    items={this.state.tickedItems}
                    onDeleteClick={this.onDeleteClick}
                    onTickClick={this.onTickClick}
                />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));