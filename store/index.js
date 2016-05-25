import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
const finalCreactStore = applyMiddleware(thunk)(createStore);
const store = finalCreactStore(reducer)
export default store;