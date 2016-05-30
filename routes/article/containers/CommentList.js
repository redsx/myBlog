import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComment } from '../../../actions'
import CommentList from '../components/CommentList.jsx'
function mapStateToProps(state) {
    return {
        comment:state.comment
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
             getComment:getComment
         },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentList);