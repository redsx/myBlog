import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ShowSnackbar from '../components/ShowSnackbar.jsx'
function mapStateToProps(state) {
    return {
        message:state.resState.message
    }
}
export default connect(mapStateToProps)(ShowSnackbar);