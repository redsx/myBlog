import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList.jsx'
import { setArticles , LIMIT, getArticles, setLoading }  from '../../../actions'
function mapStateToProps(state) {
    return {
        articles:state.articleList,
        isLoading:state.resState.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setArticles , LIMIT, getArticles, setLoading },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);