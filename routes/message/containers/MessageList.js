import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMessage,setLoading } from '../../../actions'
import MessageList from '../components/MessageList.jsx'
function mapStateToProps(state) {
    return {
        messages:state.messages,
        isLoading:state.resState.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMessage, setLoading },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageList);