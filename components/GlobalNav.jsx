import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionList from 'material-ui/svg-icons/action/list' 
import ActionGrade from 'material-ui/svg-icons/action/grade'
import FileFolder from 'material-ui/svg-icons/file/folder'
import Divider from 'material-ui/Divider'
const styles = {
    title:{
        cursor:'pointer'
    }
}

const GlobalNav = React.createClass({
    getInitialState:function () {
        return {
            open:false
        }
    },
    componentDidMount:function () {
        this.props.getCategory();
    },
    handleToggle:function () {
        this.setState({
            open:!this.state.open
        });
    },
    handleClose:function () {
        console.log('handleClose')
        this.setState({
            open:false
        });
    },
    generateItem:function () {
        return this.props.category.map((item) => {
            return (
                    <Link to = {'/page/'+ item.category +'/1'} >
                         <ListItem
                             primaryText = {item.category}
                             onClick = {()=>{this.handleToggle()}}
                             leftIcon = {<ActionGrade />}
                         />
                    </Link>
                );
        })
    },
    render:function () {
        return (
            <div>
            <AppBar
                title={<span style={styles.title}>MDZZ</span>}
                onLeftIconButtonTouchTap = {()=>{this.handleToggle()}}
            />
            <Drawer 
                    docked = {false}
                    width = {256}
                    open = {this.state.open}
                    onRequestChange = {(open) => { this.setState({open:open})}}
                >
                <List>
                    <Subheader><h1>MDZZ</h1></Subheader>
                    <Divider />
                    <Link 
                        to = '/page/1' 
                    >
                        <ListItem 
                            primaryText = 'Index'
                            onClick = {()=>{this.handleToggle()}}
                            leftIcon = {<ActionList />}
                        />
                    </Link>
                    <Link 
                        to = '/message' 
                    >
                        <ListItem
                             primaryText = '留言' 
                             onClick = {()=>{this.handleToggle()}}
                             leftIcon = {<ActionInfo />}
                        />
                    </Link>
                    <ListItem
                             primaryText = '分类' 
                             leftIcon = {<FileFolder />}
                             primaryTogglesNestedList = {true}
                             initiallyOpen = {true}
                             nestedItems = {this.generateItem()}
                        />
                </List>
                </Drawer>
            </div>
        );
    }
});



export default GlobalNav;