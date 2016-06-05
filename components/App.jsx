import React from 'react'
import GlobalNav from '../containers/GlobalNav.js'
import RightMenu from '../containers/RightMenu.js'
import Loading from './Loading.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper'
import { GridList, GridTile } from 'material-ui/GridList'

const styles = {
    paper:{
        margin:'20px 15px 10px 15px'
    }
}
 const App = React.createClass({
     getInitialState:function () {
        if(window.innerWidth >980){
            return {
                isLoading:true,
                smallScreeen:false
            }
        }else{
            return {
                isLoading:true,
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
                <GridList
                    cols={3}
                    padding={1}
                    cellHeight={'100%'}
                >
                    <GridTile
                        cols={col}
                    >
                    {this.props.children}
                    </GridTile>
                    <GridTile
                        col={3-col}
                    >
                    <Paper style = {styles.paper} >
                    {
                        this.state.smallScreeen? '':  <RightMenu />  
                    }
                    </Paper>
                    </GridTile>
                </GridList>
            </div>            
            </MuiThemeProvider>
         )
     }
 });
 export default App