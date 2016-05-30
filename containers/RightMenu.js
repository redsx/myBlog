import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RightMenu from '../components/RightMenu.jsx'
import { getCategory } from '../actions'
function mapStateToProps(state) {
    return {
        category:state.category
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCategory },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RightMenu);