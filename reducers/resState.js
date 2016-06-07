import { SET_LOADING, SET_SNACKBAR } from '../actions'
export default function resState(state = {},action) {
    switch (action.type) {
        case SET_LOADING:{
            return Object.assign({},state,{isLoading:action.isLoading});
        }
        case SET_SNACKBAR:{
            return Object.assign({},state,{message:action.message});
        }
        default:{
            return state;
        }
    }
}