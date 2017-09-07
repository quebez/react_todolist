import React from 'react';

import BasicListItem from './basic_list_item';

const BasicList = (props) => {
    if (!props.items){
        return <div></div>;
    }

    const itemsToRender = props.items.map((item => {
        return(
            <BasicListItem 
                item={ item.text }
                key={ item.id }
            />
        );
    }));

    return(
        <ul className="list-group">
            { itemsToRender }
        </ul>
    );
}

export default BasicList;