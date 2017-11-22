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
    

    onDeleteClick = (item) => {
        this.setState(this.deleteItem(item));
    }

    onAddItemClick = (item) => {
        this.setState(this.addItem(item));
    }

    onTickClick = (item) => {
        this.setState(this.tickItem(item));
    }

    //TODO: Make it better #iDontLikeIt
    deleteItem(item, state) {
        if (item.ticked) {
            return { ...state, 
                tickedItems: this.state.tickedItems.filter(element => {
                    return element.id !== item.id;
                })
            };
        } else {
            return { ...state, 
                items: this.state.items.filter(element => {
                    return element.id !== item.id;
                })
            };
        };
    }

    addItem(item, state) {
        return {...state, items: update(this.state.items, {$push: [item]})};
    }

    //TODO: Make untick real
    tickItem(item, state) {
        this.onDeleteClick(item);
        item.ticked = true;
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