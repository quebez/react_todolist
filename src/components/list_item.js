import React, { Component } from 'react';

class ListItem extends Component {

    itemTicked() {
        return (this.props.item.ticked) ? 'ticked' : 'unticked';
    }

    render() {
        return (
            <li className={`list-group-item ${this.itemTicked()}`}>
                <div>
                    <div className="btn-group inlineButtons">
                        <button className="btn btn-default tickButton" onClick={() => {this.props.onTickUntickClick(this.props.item)}}>
                            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                        </button>
                        <button className="btn btn-default deleteButton" onClick={() => {this.props.onDeleteClick(this.props.item)}}>
                            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </button>
                    </div>
                        {this.props.item.text}
                    <div className="itemTimeCreated"> {this.props.item.timeCreated} </div>
                </div>
            </li>
        );
    }
}

export default ListItem;