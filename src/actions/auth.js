import { USER_LOGINED_IN, USER_LOGINED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
    type: USER_LOGINED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGINED_OUT
});

export const login = credentials => dispatch => 
    api.user.login(credentials).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('bookwormJWT');
    dispatch(userLoggedOut())
};
