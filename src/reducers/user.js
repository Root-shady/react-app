import { USER_LOGINED_IN, USER_LOGINED_OUT } from "../types";

export default function user(state={}, action={}){
    switch(action.type){
        case USER_LOGINED_IN:
            return action.user;
        case USER_LOGINED_OUT:
            return {};
        default:
            return state;
    }
}