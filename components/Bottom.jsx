import React from 'react'
import FontIcon from 'material-ui/FontIcon'
var styles = {
    bottom:{
        backgroundColor:'rgb(33,33,33)',
        textAlign:'center',
        padding:'40px 10px',
        color:'#444',
        marginTop:'50px'
    }
}
const Bottom = React.createClass({
    render:function () {
        return (
            <div style = {styles.bottom} 
            >
                <p>Code crafted by MDZZ</p>
                <p>
                    <a href='https://github.com/redsx' target='_blank'>
                    <FontIcon 
                        className = 'muidocs-icon-custom-github'
                        color = 'white'
                    />  
                    </a>
                </p>
            </div>
        );
    }
})
export default Bottom;