import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMessage } from '../../../actions'
import MessageList from '../components/MessageList.jsx'
function mapStateToProps(state) {
    return {
        messages:state.messages
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMessage },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageList);