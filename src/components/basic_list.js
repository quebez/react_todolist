import React from 'react';

import BasicListItem from './basic_list_item';

const BasicList = (props) => {
    const itemsToRender = props.items.map((item => {
        return (
            <BasicListItem
                item={item}
                key={item.id}
                onDeleteClick={props.onDeleteClick}
                onTickClick={props.onTickClick}
            />
        );
    }));

    return (
        <ul className="list-group">
            {itemsToRender}
        </ul>
    );
}

export default BasicList;