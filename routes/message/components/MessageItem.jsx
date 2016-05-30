import React from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Communication from 'material-ui/svg-icons/communication/chat-bubble'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
const src = '';
const styles = {
    icon:{
        color:'rgba(177,177,177,1)'
    },
    content:{
        padding:'0.5rem 0'
    },
    time:{
        fontSize:'0.8rem',
        color:'#666'
    }
}
const MessageItem = React.createClass({
    getInitialState:function () {
        return {
            open:false,
            disabled:true,
            errName:'',
            errContent:''
        }
    },
    handleClose:function () {
        this.setState({open:false});
    },
    handleOpen:function () {
        this.setState({open:true});
    },
    handleSendReply:function () {
        var reply = {};
        var name = document.getElementById('name');
        var content = document.getElementById('reply');
        reply.id = this.props.message.id;
        reply.name = name.value.trim();
        reply.content = content.value.trim();
        this.setState({
            open:false,
            disabled:true
        });
        this.props.sendReply(reply);
    },
    handleCheckButton:function () {
        var reply = {};
        reply.name = document.getElementById('name').value.trim();
        reply.content = document.getElementById('reply').value.trim();
        if( reply.name !== '' && reply.content !== '' ){
            this.setState({disabled:false});
        }else{
            this.setState({disabled:true});
        }
    },
    handleCheckName:function () {
        var name = document.getElementById('name').value.trim();
        if( name === '' && this.state.errName === '' ){
            this.setState({errName:'name 不能为空'});
        }
        if( name !== '' && this.state.errName !== '' ){
            this.setState({errName:''});
        }
        this.handleCheckButton();
    },
    handleCheckContent:function () {
        var content = document.getElementById('reply').value.trim();  
        if( content === '' && this.state.errContent === '' ){
            this.setState({errContent:'content 不能为空'});
        }
        if( content !== '' && this.state.errContent !== '' ){
            this.setState({errContent:''});
        }
        this.handleCheckButton();      
    },
    replyItem:function (reply = []) {
        var replyItems = [];
        for(var i = 0; i<reply.length; i++){
            replyItems.push(
                <ListItem
                    leftAvatar = {<Avatar src={ src } />}
                    key = {i}
                >
                <span>{reply[i].name}</span>
                <span style = {styles.time} > &nbsp;&nbsp; {reply[i].time}</span>                            
                <div
                    style = {styles.content}
                >
                    {reply[i].content}
                </div>
                </ListItem>
            );
        }
        return replyItems;
    },
    render:function () {
        const { name, content, time, reply } = this.props.message;
        const replyItems = this.replyItem(reply);
        const actions = [
                            <FlatButton 
                                label = 'Reply'
                                primary = {true}
                                disabled = {this.state.disabled}
                                onTouchTap = {()=>{this.handleSendReply()}}
                                keyboardFocused = {true}
                            />,
                            <FlatButton 
                                label = 'Close'
                                primary = {true}
                                onTouchTap = {()=>{this.handleClose()}}
                            />,
                         ];
         const rightIconButton = (
            <IconButton
                touch= {true}
                tooltip= 'Reply'
                onTouchTap = {()=>{this.handleOpen()}}
            >
            <Communication 
                color = 'rgba(177,177,177,1)'        
            />
            </IconButton>
        );                 
        return (
            <ListItem
                leftAvatar = {<Avatar src = { src } />}
                rightIconButton = { rightIconButton }
                primaryTogglesNestedList = { true }
                nestedItems = { replyItems }
            >
            <div>
                <span>{name}</span>
                <span style = {styles.time} > &nbsp;&nbsp; {time}</span>                            
                <div
                    style = {styles.content}
                >
                    {content}
                </div>
            </div>
            <Dialog
                title = 'Reply'
                actions = {actions}
                open = {this.state.open}
            >
            <TextField
                floatingLabelText = 'name'
                id = 'name'
                errorText = {this.state.errName}
                onChange = {()=>{this.handleCheckName()}}
            />
            <br/>
            <TextField 
                floatingLabelText = 'content'
                id = 'reply'
                errorText = {this.state.errContent}
                onChange = {()=>{this.handleCheckContent()}}
                multiLine = {true}
                fullWidth = {true}
                rowsMax = {5}
            />
            </Dialog>                     
            </ListItem>
        );
    }
});
export default MessageItem;