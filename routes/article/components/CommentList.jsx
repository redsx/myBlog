import React from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import CommentItem from '../containers/CommentItem.js'
const CommentList = React.createClass({
    componentDidMount:function () {
        this.props.getComment()
    },
    render:function () {
        var { comment } = this.props;
        return (
            <List>
                {
                    comment? 
                    comment.map(function (item) {
                        return (
                            <CommentItem message = { item } key={item.id} />
                        );
                    }):''
                }
            </List>
        );
    }
});
export default CommentList;