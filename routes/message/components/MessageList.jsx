import React from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import MessageItem from '../containers/MessageItem.js'
const MessageList = React.createClass({
    componentWillMount:function () {
        this.props.getMessage();
    },
    render:function () {
        var { messages } = this.props;
        return (
            <List>
                {
                    messages? 
                    messages.map(function (item) {
                        return (
                            <MessageItem message = { item } key={item.id} />
                        );
                    }):''
                }
            </List>
        );
    }
});
export default MessageList;