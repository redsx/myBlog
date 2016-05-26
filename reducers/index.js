import { combineReducers } from 'redux'
import pagination from './pagination.js'
import articles from './articles.js'
import messages from './messages.js'
const rootReducer = combineReducers({
    pagination,
    articles,
    messages
});
export default rootReducer;