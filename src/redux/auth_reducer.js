import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {showErrorTC} from "./app_reducer";

const SET_USER_AUTH_DATA = 'auth_reducer/SET_USER_AUTH_DATA';
const SET_AUTH = 'auth_reducer/SET_AUTH';
const SET_CAPTCHA_URL = 'auth_reducer/SET_CAPTCHA_URL';


let initialState = {
    userId: null,
    userEmail: null,
    userLogin: null,
    isAuth: false,
    captchaUrl: null
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
        case SET_CAPTCHA_URL:
            return {...state,
                captchaUrl: action.url,
            }
        default:
            return state;
    }
}
export const setUserAuthDataAC = (userId, email, login, isAuth ) => ({type: SET_USER_AUTH_DATA, authData: {userId, email, login, isAuth}});
export const setCaptchaUrlAC = (url) => ({type: SET_CAPTCHA_URL, url:url });

export const authTC = () => {
    return async (dispatch) => {
        try {
            let response =  await authAPI.auth()
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setUserAuthDataAC(id, email, login, true));
            }
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}

export const loginTC = (loginData) => {
    return async (dispatch) => {
        try {
            let response =  await authAPI.login(loginData)
            if (response.resultCode === 0) {
                dispatch(authTC());
            }else if (response.resultCode === 10){
                authAPI.getCaptchaUrl()
                    .then((data)=>{
                        dispatch(setCaptchaUrlAC(data.url))
                    })
            }
            else {
                let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}
export const logoutTC = () => {
    return async (dispatch) => {
        try {
            let response =  await authAPI.logout()
            if (response.resultCode === 0) {
                dispatch(setUserAuthDataAC(null, null, null, false));
            }
        }
        catch (error) {
            dispatch(showErrorTC(error.message));
        }
    }
}
export default authReducer;