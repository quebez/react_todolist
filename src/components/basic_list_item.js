import React, { Component } from 'react';

const BasicListItem = (props) => {
    return(
        <li className="list-group-item">
            { props.item }
        </li>
    );
}

export default BasicListItem;