import React from 'react'
import MarkdownEle from '../../../components/MarkdownEle.jsx'
import Paper from 'material-ui/Paper'
const styles = {
    paper:{
        margin:'20px 15px 10px 15px',
        padding:'10px 15px'
    }
};
const Article = React.createClass({
    componentWillMount:function () {
        this.props.getArticle(this.props.articleTitle);  
    },
    shouldComponentUpdate:function (nextProps,nextState) {
        if(this.props.articleTitle !== nextProps.articleTitle){
            this.props.getArticle(nextProps.articleTitle);
        }
        return true;
    },
    render:function () {
        var { title, content, time } = this.props;
        return (
            <Paper 
                style = { styles.paper }
             >
                <h2> { title } </h2>
                <h6> {time } </h6>
                <MarkdownEle text = { content || '' } />
            </Paper>
        );
    }
});
export default Article;