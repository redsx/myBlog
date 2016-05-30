import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from '../../../actions'
import AddMessage from '../components/AddMessage.jsx'
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ sendMessage },dispatch);    
}
export default connect(mapStateToProps,mapDispatchToProps)(AddMessage);