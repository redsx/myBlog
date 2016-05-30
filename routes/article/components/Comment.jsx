import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import CommentList from '../containers/CommentList.js'
import AddComment from '../containers/AddComment.js'
import Article from '../containers/Article.js'
const styles = {
    paper:{
        margin:'20px 15px 10px 15px'
    }
};
const Comment = React.createClass({
    render:function () {
        return(
            <Paper
                style = {styles.paper} 
            >
                <Tabs>
                    <Tab label='评论' >
                        <AddComment />
                    </Tab>
                    <Tab label='列表' >
                        <CommentList />
                    </Tab>
                </Tabs>
            </Paper>
        );
    }
});
export default Comment;