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

    /**
     *     addItem(text) { //set state when enter is pressed
        this.setState({
            items: {
                text: this.text,

            }
        });
        console.log(this.state);
    }
    <InputBar onEnterPress= { addItem }/>
     */
}

export default BasicList;