import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import InputBar from './components/input_bar';
import List from './components/list';
import Messages from './components/messages';

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

    onTickUntickClick = (item) => {
        this.setState(this.tickUntickItem(item));
    }

    deleteItem(item, state) {
        const list = item.ticked ? this.state.tickedItems : this.state.items;
        const newList = list.filter(element => {
            return element.id !== item.id;
        });

        return item.ticked ? { ...state, tickedItems: newList } : { ...state, items: newList };
    }

    addItem(item, state) {
        return { ...state, items: update(this.state.items, { $push: [item] }) };
    }

    tickUntickItem(item, state) {
        this.onDeleteClick(item);
        item.ticked = item.ticked ? false : true;
        return item.ticked ? { ...state, tickedItems: update(this.state.tickedItems, { $unshift: [item] }) } : this.addItem(item, state);
    }

    render() {
        return (
            <div>
                <div className='messages'>
                    <Messages />
                </div>
                <div id='content'>
                    <InputBar
                        onAddItemClick={this.onAddItemClick}
                    />
                    <br />
                    <List
                        items={this.state.items}
                        onDeleteClick={this.onDeleteClick}
                        onTickUntickClick={this.onTickUntickClick}
                    />
                    <List
                        items={this.state.tickedItems}
                        onDeleteClick={this.onDeleteClick}
                        onTickUntickClick={this.onTickUntickClick}
                    />
                </div>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));