import React from 'react';

import ListItem from './list_item';

const List = (props) => {
    const itemsToRender = props.items.map((item => {
        return (
            <ListItem
                item={item}
                key={item.id}
                onDeleteClick={props.onDeleteClick}
                onTickUntickClick={props.onTickUntickClick}
            />
        );
    }));

    return (
        <ul className="list-group">
            {itemsToRender}
        </ul>
    );
}

export default List;