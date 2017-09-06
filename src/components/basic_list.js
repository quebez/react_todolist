import React from 'react';

import BasicListItem from './basic_list_item';

const BasicList = (props) => {
    const items = props.items.map((item => {
        return(
            <BasicListItem 
                item={ item.text }
                key={ item.id }
            />
        );
    }));

    return(
        <ul className="list-group">
            { items }
        </ul>
    );
}

export default BasicList;