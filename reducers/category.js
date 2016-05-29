import { SET_CATEGORY } from '../actions'
export default function category(state = [],action) {
    switch(action.type){
        case SET_CATEGORY:{
            return action.category;
        }
        default:{
            return state;
        }
    }
}