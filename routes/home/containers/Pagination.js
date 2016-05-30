import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pagination from '../components/Pagination.jsx'
import { getMaxPage }  from '../../../actions'
function mapSateToProps(state) {
    return {
        maxPage:state.pagination.maxPage,
        curPage:state.pagination.curPage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMaxPage },dispatch);
}
export default connect(mapSateToProps,mapDispatchToProps)(Pagination);