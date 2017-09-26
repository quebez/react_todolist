import React, { Component } from 'react';

class BasicListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
           tickUntickItem: 'unticked'
        }
    }

    toggleTickItem() {
        const css = (this.state.tickUntickItem === 'unticked') ? 'ticked' : 'unticked';
        this.setState({tickUntickItem: css});
    }

    render() {
        return (
            <li className={"list-group-item " + this.state.tickUntickItem}>
                <div className="">
                    <div className="btn-group inlineButtons">
                        <button className="btn btn-default tickButton" onClick={this.toggleTickItem.bind(this)}>
                            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                        </button>
                        <button className="btn btn-default deleteButton" onClick={this.props.deleteItem}>
                            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </button>
                    </div>
                        {this.props.item}
                </div>
            </li>
        );
    }
}

export default BasicListItem;