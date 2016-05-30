import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
const AddMessage = React.createClass({
    getInitialState:function () {
        return {
            disabled:true,
            errName:'',
            errContent:''
        }
    },
    handleCheckButton:function () {
        var message = {};
        message.name = this.refs.name.input.value.trim();
        message.content = document.getElementById('content').value.trim();
        if(message.name !== '' && message.content !== ''){
            this.setState({disabled:false});
        }else{
            this.setState({disabled:true});
        }
    },
    handleCheckNameError:function () {
        var name = this.refs.name.input.value.trim();
        if(name === '' && this.state.errName === ''){
            this.setState({errName:'name不能为空'});
        }
        if(name !== '' && this.state.errName !== ''){
            this.setState({errName:''});
        }
        this.handleCheckButton();
    },
    handleCheckContentError:function () {
        var content = document.getElementById('content').value.trim();
        if(content === '' && this.state.errContent === ''){
            this.setState({errContent:'content不能为空'});
        }
        if(content !== '' && this.state.errContent !== ''){
            this.setState({errContent:''});
        }
        this.handleCheckButton();
    },
    handleClick:function () {
        var message = {};
        var content = document.getElementById('content')
        message.name = this.refs.name.input.value.trim();
        message.email = this.refs.email.input.value.trim();
        message.content = content.value.trim();
        if(this.props.id){
            message.id = this.props.id;
        }
        console.log(message);
        this.refs.name.input.value = '';
        this.refs.email.input.value = '';
        content.value = '';
        this.props.sendMessage(message);
        this.setState({disabled:true});
    },
    render:function () {
        return (
            <div
                style = {{
                    padding:'0px 20px 10px 20px'
                }}
            >
                <TextField
                    floatingLabelText = 'name'
                    ref = 'name'
                    onChange = {(event)=>{this.handleCheckNameError()}}
                    errorText = {this.state.errName}
                    style = {{
                        width:'40%' 
                    }}
                ></TextField>
                <TextField
                    floatingLabelText = 'email'
                    ref = 'email'
                    style = {{
                        width:'70%'
                    }}
                ></TextField>
                <TextField
                    floatingLabelText = 'content'
                    ref = 'content'
                    id = 'content'
                    onChange = {(event)=>{this.handleCheckContentError()}}
                    errorText = {this.state.errContent}
                    fullWidth = {true}
                    multiLine = {true}
                    maxRow = {5}
                ></TextField>
                <RaisedButton 
                    primary = {true}
                    disabled = {this.state.disabled}
                    onClick = {()=>{this.handleClick()}}
                    label = '提交'
                />
            </div>
        );
    }
});
export default AddMessage;