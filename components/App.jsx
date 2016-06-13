import React from 'react'
import GlobalNav from '../containers/GlobalNav.js'
import RightMenu from '../containers/RightMenu.js'
import Bottom from './Bottom.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper'
import { GridList, GridTile } from 'material-ui/GridList'
import ShowSnackbar from '../containers/ShowSnackbar.js'

const styles = {
    paper:{
        margin:'20px 15px 10px 15px'
    }
}
 const App = React.createClass({
     getInitialState:function () {
        if(window.innerWidth >980){
            return {
                smallScreeen:false
            }
        }else{
            return {
                smallScreeen:true
            }
        }
    },
    componentDidMount:function () {
        var self = this;
        window.addEventListener('resize',function(event){
            if( self.state.smallScreeen && window.innerWidth>980 ){
                self.setState({smallScreeen:false})
            }
            if( !self.state.smallScreeen && window.innerWidth<=980 ){
                self.setState({smallScreeen:true})
            }
        });
    },
    render:function () {
        var col = 2;
        if(this.state.smallScreeen){
            col = 3
        }
         return (
             <MuiThemeProvider muiTheme={getMuiTheme()}>
             <div>
                <GlobalNav />
                <div
                    style = {{
                        width:'100%'
                    }}
                >
                    <div
                        style = {{
                            width:33.33*col+'%',
                            float:'left'
                        }}
                    >
                    {this.props.children}
                    </div>
                    <div
                        style = {{
                            width:33.33*(3-col)+'%',
                            float:'left'
                        }}
                    >
                    <Paper style = {styles.paper} >
                    {
                        this.state.smallScreeen? '':  <RightMenu />  
                    }
                    </Paper>
                    </div>
                    <div
                        style = {{
                            clear:'both'
                        }}
                    ></div>
                </div>
                <Bottom />
                <ShowSnackbar />
            </div>            
            </MuiThemeProvider>
         )
     }
 });
 export default App