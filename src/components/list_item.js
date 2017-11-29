import React, { Component } from 'react';

class ListItem extends Component {

    itemTicked(ticked) {
        return ticked ? 'ticked' : 'unticked';
    }

    tickUntickGlyphicon(ticked) {
        return ticked ? 'glyphicon-repeat' : 'glyphicon-ok';
    }

    render() {
        const item = this.props.item;
        return (
            <li className={`list-group-item ${this.itemTicked(item.ticked)}`}>
                <div>
                    <div className="btn-group">
                        <button 
                            className="btn btn-default tickButton" 
                            onClick={() => { this.props.onTickUntickClick(item) }}
                        >
                            <span 
                                className={`glyphicon ${this.tickUntickGlyphicon(item.ticked)}`} 
                                aria-hidden="true" 
                            />
                        </button>
                        <button 
                            className="btn btn-default deleteButton" 
                            onClick={() => { this.props.onDeleteClick(item) }}
                        >
                            <span 
                                className="glyphicon glyphicon-remove" 
                                aria-hidden="true" 
                            />
                        </button>
                    </div>
                    {item.text}
                    <div 
                        className="itemTimeCreated"> 
                        {item.timeCreated} 
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;