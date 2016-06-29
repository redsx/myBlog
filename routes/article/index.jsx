import React from 'react'
import Article from './containers/Article.js'
import Comment from './components/Comment.jsx'
const ArticlePage = React.createClass({
    render:function () {
        console.log('render article')
        return (
            <div>
                <Article articleTitle = {this.props.params.article} />
                <Comment />
            </div>
        );
    }
});
module.exports = ArticlePage;
// export default ArticlePage;