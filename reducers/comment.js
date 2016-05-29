import { SET_COMMENT } from '../actions'
export default function article(state = [], action) {
    switch(action.type){
        case SET_COMMENT:{
            return action.comment;
        }
        default:{
            return state;
        }
    }
}