import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton' 
import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionList from 'material-ui/svg-icons/action/list' 
import ActionGrade from 'material-ui/svg-icons/action/grade'
import FileFolder from 'material-ui/svg-icons/file/folder'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
const styles = {
    title:{
        cursor:'pointer'
    },
    iconRight:{
        marginLeft:''
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
                         <ListItem
                             onClick = {()=>{this.handleToggle()}}
                             leftIcon = {<ActionGrade />}
                         >
                             <Link to = {'/page/'+ item.category +'/1'} > {item.category} </Link>
                         </ListItem>
                         
                );
        })
    },
    render:function () {
        return (
            <div>
            <AppBar
                title={<span style={styles.title}>MDZZ</span>}
                onLeftIconButtonTouchTap = {()=>{this.handleToggle()}}
                iconElementRight = {
                    <IconButton>
                    <a href='#'>
                        <FontIcon 
                            className = 'muidocs-icon-custom-github'
                            color = 'white'
                        />   
                    </a>
                    </IconButton>
                }
                iconStyleRight = {styles.iconRight}
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
                            primaryText = '首页'
                            onClick = {()=>{this.handleToggle()}}
                            leftIcon = {<FontIcon className='muidocs-icon-action-home' />}
                        />
                    </Link>
                    
                    <ListItem
                             primaryText = '分类' 
                             leftIcon = {<FileFolder />}
                             primaryTogglesNestedList = {true}
                             initiallyOpen = {true}
                             nestedItems = {this.generateItem()}
                        />
                     <Link 
                        to = '/message' 
                    >
                        <ListItem
                             primaryText = '留言' 
                             onClick = {()=>{this.handleToggle()}}
                             leftIcon = {<ContentDrafts />}
                        />
                    </Link>
                    <Subheader><h3>关于我</h3></Subheader>
                    <Divider />
                    <a href='#'>
                        <ListItem 
                            primaryText = 'github'
                        />
                    </a>
                    <a href='#'>
                        <ListItem 
                            primaryText = 'H5简历'
                        />
                    </a>
                    <a href='#'>
                        <ListItem 
                            primaryText = '我的企鹅'
                        />
                    </a>
                </List>
                </Drawer>
            </div>
        );
    }
});



export default GlobalNav;