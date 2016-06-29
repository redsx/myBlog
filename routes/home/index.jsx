import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Divider from 'material-ui/Divider'
import ArticleList from './containers/ArticleList.js'
import Pagination from './containers/Pagination.js'
const Home = React.createClass({
    render:function () {
        if(this.props.params){ 
            var page = this.props.params.page || 1;    
            var category = this.props.params.category || '';
        }else{
            var page = 1;
            var category = '';
        }
        return(
            <div>
                <ArticleList page={page} category = {category}/>
                <Divider />
                <Pagination category = {category}/>
            </div>
            );
        }
    
});
module.exports = Home;
// export default Home;