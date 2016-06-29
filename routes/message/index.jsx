import React from 'react'
import MessageList from './containers/MessageList.js'
import AddMessage from './containers/AddMessage.js'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
const styles = {
    paper:{
        margin:'20px 15px 10px 15px'
    },
    subheader:{
        color:'black',
    }
}
const Message = React.createClass({
    render:function () {
        return (
            <div>
            <Paper style = {styles.paper}>
                <Subheader><h3>留言列表</h3></Subheader>
                <Divider />
                <MessageList />
            </Paper>
            <Paper style = {styles.paper}>
                <Subheader><h3>我要留言</h3></Subheader>
                <Divider />
                <AddMessage />
            </Paper>
            </div>
        );
    }
});
module.exports = Message;
// export default Message;