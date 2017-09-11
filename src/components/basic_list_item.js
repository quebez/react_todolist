import React, { Component } from 'react';

const BasicListItem = (props) => {
    return (
        <li className="list-group-item">
            <div>
                <div className="btn-group inlineButtons">
                    <button className="btn btn-default tickButton" onClick=''>
                        <span className="glyphicon glyphicon-ok" aria-hidden="true" />
                    </button>
                    <button className="btn btn-default deleteButton" onClick={props.popItem}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true" />
                    </button>
                </div>
                {props.item}
            </div>
        </li>
    );
}

export default BasicListItem;