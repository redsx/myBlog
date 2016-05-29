import { SET_ARTICLE } from '../actions'
export default function article(state = {}, action) {
    switch(action.type){
        case SET_ARTICLE:{
            return action.article;
        }
        default:{
            return state;
        }
    }
}