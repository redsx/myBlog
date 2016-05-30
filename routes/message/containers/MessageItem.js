import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMessage, sendReply } from '../../../actions'
import MessageItem from '../components/MessageItem.jsx'
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMessage, sendReply },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageItem);