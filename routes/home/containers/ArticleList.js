import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList.jsx'
import { setArticles , LIMIT, getArticles }  from '../../../actions'
function mapStateToProps(state) {
    return {
        articles:state.articleList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setArticles , LIMIT, getArticles },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);