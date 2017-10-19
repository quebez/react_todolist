import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

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

    onTickClick = () => {
        //TODO: sort ticked items under unticked items
        this.setState(this.tickItem);
    }

    deleteItem(state) {
        const newListItems = this.state.items.filter(element => element.id != (/\S*\$([0-9]*)/g).exec(event.target.getAttribute('data-reactid'))[1])
        return { ...state, items: newListItems};
    }

    addItem(item, state) {
        return {...state, items: update(this.state.items, {$push: [item]})};
    }

    tickItem(state) { //is there a way to make it easier?
        const items = this.state.items;
        const newItem = items.filter(element => element.id == (/\S*\$([0-9]*)/g).exec(event.target.getAttribute('data-reactid'))[1])[0];
        const index = items.findIndex(element => element.id === newItem.id);
        newItem.ticked = (newItem.ticked) ? false : true;
        return {...state, items: update(this.state.items, {$splice: [[index, 1, newItem]]})};
    }

    //UNUSED
    sortItems(items) {
        sortedItems = items.sort((a, b) => {
            return a.id - b.id;
        });
        console.log(sortedItems);
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
                    onTickClick={this.onTickClick}
                />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));