import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
const finalCreactStore = applyMiddleware(thunk)(createStore);
const store = finalCreactStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
})
export default store;