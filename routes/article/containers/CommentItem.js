import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComment, sendReplyToComment } from '../../../actions'
import MessageItem from '../../message/components/MessageItem.jsx'
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        getMessage:getComment, 
        sendReply:sendReplyToComment
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageItem);