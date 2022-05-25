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
                    isAuth: action.authData.isAuth
            }
        default:
            return state;
    }
}
export const setUserAuthDataAC = (userId, email, login, isAuth ) => ({type: SET_USER_AUTH_DATA, authData: {userId, email, login, isAuth}});
export const authTC = () => {
    return (dispatch) => {
        authAPI.auth()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setUserAuthDataAC(id, email, login, true));
                }
            });
    }
}

export const loginTC = (loginData) => {
    return (dispatch) => {
        authAPI.login(loginData)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(authTC());

                }
            });
    }
}
export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(setUserAuthDataAC(null, null, null, false));
                }
            });
    }
}
export default authReducer;