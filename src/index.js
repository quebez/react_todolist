import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import InputBar from './components/input_bar';
import List from './components/list';
import Messages from './components/messages';

let timeoutId;

class App extends Component {
    state = {
        items: [],
        tickedItems: [],
        messageId: 0
    };

    onDeleteClick = (item) => {
        this.setState(this.deleteItem(item));
        this.deleteMessageAfterTimeout();
    }

    onAddItemClick = (item, messageId) => {
        this.setState(this.addItem(item, messageId));
        this.deleteMessageAfterTimeout();
    }

    onTickUntickClick = (item) => {
        this.setState(this.tickUntickItem(item));
        this.deleteMessageAfterTimeout();
    }

    deleteMessageAfterTimeout = (state) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {this.setState({...state, messageId: 0})}, 5000);
    }



    addItem(item, messageId, state) {
        return { ...state, items: update(this.state.items, { $push: [item] }), messageId};
    }

    deleteItem(item, state) {
        const list = item.ticked ? this.state.tickedItems : this.state.items;
        const newList = list.filter(element => {
            return element.id !== item.id;
        });

        return item.ticked ? { ...state, tickedItems: newList, messageId: 3 } : { ...state, items: newList, messageId: -3 };
    }

    tickUntickItem(item, state) {
        this.onDeleteClick(item);
        item.ticked = item.ticked ? false : true;
        return item.ticked ? { ...state, tickedItems: update(this.state.tickedItems, { $unshift: [item] }), messageId: 2 } : this.addItem(item, -2, state);
    }

    render() {
        return (
            <div>
                <div className='messages'>
                    <Messages 
                        messageId={this.state.messageId}
                    />
                </div>
                <div className='content'>
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