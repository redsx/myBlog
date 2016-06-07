import React from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import MessageItem from '../containers/MessageItem.js'
import Divider from 'material-ui/Divider'
import Loading from '../../../components/Loading.jsx'
const styles = {
    text:{
        textAlign:'center'
    },
    pointer:{
        cursor:'pointer'
    }
}
const MessageList = React.createClass({
    getInitialState:function () {
        return {
            isLoadedAll:false
        }
    },
    componentWillMount:function () {
        this.props.setLoading(true);        
        this.props.getMessage(1);
    },
    
    handleClick:function () {
        var { curPage } = this.props.messages;
        curPage = parseInt(curPage);
        this.props.getMessage(curPage + 1);        
    },
    render:function () {
        var { curPage, maxPage, messageArr } = this.props.messages;
        curPage = parseInt(curPage);
        maxPage = parseInt(maxPage);
        return (
            this.props.isLoading?
            <Loading />
            :
            <List>
                {
                    messageArr? 
                    messageArr.map(function (item) {
                        return (
                            <MessageItem message = { item } key={item.id} />
                        );
                    }):''
                }
                <Divider />
                <div
                    style = {styles.text}
                >
                    {
                        curPage === maxPage ? <span 
                                                    style = {styles.pointer}
                                                 >
                                                 😆已经全部加载了😆
                                                 </span> :<a
                                                            style = {styles.pointer}
                                                            onClick = {()=>this.handleClick()}
                                                        >
                                                            加载更多
                                                        </a>
                        
                    }
                </div>
            </List>
        );
    }
});
export default MessageList;