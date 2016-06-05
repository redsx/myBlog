import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
const styles = {
    marginTop:'25%',
    marginLeft:'46%'
};
const Loading = React.createClass({
    render:function () {
        return this.props.isLoading ? false : <CircularProgress size = { 1.5 } style = {styles}/>
    }
});
export default Loading;