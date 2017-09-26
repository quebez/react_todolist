import React from 'react';

import BasicListItem from './basic_list_item';

const BasicList = (props) => {
    if (Object.keys(props.items).length === 0) {
        return <div></div>;
    }

    const itemsToRender = props.items.map((item => {
        return (
            <BasicListItem
                item={item.text}
                key={item.id}
                deleteItem={props.deleteItem}
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