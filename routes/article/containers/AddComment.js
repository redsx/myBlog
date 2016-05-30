import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendComment } from '../../../actions'
import AddMessage from '../../message/components/AddMessage.jsx'
function mapStateToProps(state) {
    return {
        id:state.article.id
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        sendMessage:sendComment
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AddMessage);