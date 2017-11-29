import React, { Component } from 'react';

import data from '../data/messages';

class Messages extends Component {
    render() {
        const message = data.messages[data.messages.map(el => {return el.messageId}).indexOf(this.props.messageId)];
        if (!message) return <div></div>;
        const alertType = message.messageId >= 1 ? 'alert-success' : 'alert-warning';

        return (
            <div className={`alert ${alertType}`}>
                {message.messageText}
            </div>
        );
    }
}

export default Messages;