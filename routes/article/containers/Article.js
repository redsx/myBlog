import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticle } from '../../../actions'
import Article from '../components/Article.jsx'
function mapStateToProps(state) {
    return {
        title:state.article.title,
        time:state.article.time,
        content:state.article.content
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getArticle }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Article);