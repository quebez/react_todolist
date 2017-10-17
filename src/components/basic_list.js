import React from 'react';

import BasicListItem from './basic_list_item';

const BasicList = (props) => {
    const itemsToRender = props.items.map((item => {
        return (
            <BasicListItem
                item={item.text}
                key={item.id}
                onDeleteClick={props.onDeleteClick}
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