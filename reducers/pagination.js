import { SET_MAX_PAGE , SET_CUR_PAGE } from '../actions'
const defaultState = {
    curPage:1,
    maxPage:1
};
export default function pagination(state=defaultState,action) {
    switch(action.type){
        case SET_MAX_PAGE:{
            return Object.assign({},state,{maxPage:action.maxPage});
        }
        case SET_CUR_PAGE:{
            return Object.assign({},state,{curPage:action.curPage});
        }
        default:{
            return state;
        }
    }
}