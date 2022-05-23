import {authAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_AUTH = 'SET_AUTH';


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
                    isAuth: true
            }
        default:
            return state;
    }
}
export const setUserAuthDataAC = (userId, email, login ) => ({type: SET_USER_AUTH_DATA, authData: {userId, email, login}});
export const setAuthAC = (isAuth) => ({type: SET_AUTH, isAuth: isAuth});
export const authTC = () => {
    return (dispatch) => {
        authAPI.auth()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setUserAuthDataAC(id, email, login));
                }
            });
    }
}

export const loginTC = (loginData) => {
    return (dispatch) => {
        authAPI.login(loginData)
            .then((response) => {
                if (response.resultCode === 0) {
                    console.log(response)
                    dispatch(setAuthAC(true));
                }
            });
    }
}
export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((response) => {
                if (response.resultCode === 0) {
                    console.log(response)
                    dispatch(setAuthAC(false));
                }
            });
    }
}
export default authReducer;