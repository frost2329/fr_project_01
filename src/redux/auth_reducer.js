import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'auth_reducer/SET_USER_AUTH_DATA';
const SET_AUTH = 'auth_reducer/SET_AUTH';


let initialState = {
    userId: null,
    userEmail: null,
    userLogin: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state,
                isAuth: action.isAuth
            }
        case SET_USER_AUTH_DATA:
            return {...state,
                    userId: action.authData.userId,
                    userEmail: action.authData.email,
                    userLogin: action.authData.login,
                    isAuth: action.authData.isAuth
            }
        default:
            return state;
    }
}
export const setUserAuthDataAC = (userId, email, login, isAuth ) => ({type: SET_USER_AUTH_DATA, authData: {userId, email, login, isAuth}});
export const authTC = () => {
    return (dispatch) => {
        return authAPI.auth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setUserAuthDataAC(id, email, login, true));
                }
            });
    }
}

export const loginTC = (loginData) => {
    return (dispatch) => {
        authAPI.login(loginData)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(authTC());
                }else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            });
    }
}
export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserAuthDataAC(null, null, null, false));
                }
            });
    }
}
export default authReducer;