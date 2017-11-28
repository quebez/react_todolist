import React, { Component } from 'react';

class ListItem extends Component {

    itemTicked() {
        return (this.props.item.ticked) ? 'ticked' : 'unticked';
    }

    render() {
        const item = this.props.item;
        return (
            <li className={`list-group-item ${this.itemTicked()}`}>
                <div>
                    <div className="btn-group inlineButtons">
                        <button className="btn btn-default tickButton" onClick={() => { this.props.onTickUntickClick(item) }}>
                            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                        </button>
                        <button className="btn btn-default deleteButton" onClick={() => { this.props.onDeleteClick(item) }}>
                            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </button>
                    </div>
                    {item.text}
                    <div className="itemTimeCreated"> {item.timeCreated} </div>
                </div>
            </li>
        );
    }
}

export default ListItem;