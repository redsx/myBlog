import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GlobalNav from '../components/GlobalNav.jsx'
import { getCategory } from '../actions'
function mapStateToProps(state) {
    return {
        category:state.category
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCategory },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(GlobalNav);