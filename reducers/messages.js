import { SET_MESSAGE } from '../actions'
export default function messages(state=[],action) {
    switch (action.type) {
        case SET_MESSAGE:{
            action.messages
        }
        default:{
            return state
        }
    }
}