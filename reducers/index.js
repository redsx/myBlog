import { combineReducers } from 'redux'
import pagination from './pagination.js'
import articles from './articles.js'
const rootReducer = combineReducers({
    pagination,
    articles
});
export default rootReducer;