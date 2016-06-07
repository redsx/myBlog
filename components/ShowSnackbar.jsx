import React from 'react'
import Snackbar from 'material-ui/Snackbar'
const ShowSnackbar = React.createClass({
    getInitialState:function () {
        return {
            open:false,
        }
    },
    hanleRequestClose:function () {
        this.setState({
            open:false,
        });
    },
    componentWillReceiveProps:function (nextProps) {
        if(nextProps.message !== ''){
            this.setState({
                open:true
            });
        }
    },
    render:function () {
        return (
            <Snackbar
                open = {this.state.open}
                message = {this.props.message || ''}
                onRequestClose = {()=>{this.hanleRequestClose()}}
                autoHideDuration = {3000}
            />
        );
    }
});
export default ShowSnackbar;