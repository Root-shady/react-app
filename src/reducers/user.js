import { USER_LOGINED_IN } from "../types";

export default function user(state={}, action={}){
    switch(action.type){
        case USER_LOGINED_IN:
            return action.user;
        default:
            return state;
    }
}