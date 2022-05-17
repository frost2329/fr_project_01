const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';


let initialState = {
    userId: null,
    userEmail: null,
    userLogin: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const setUserAuthData = (userId, email, login ) => ({type: SET_USER_AUTH_DATA, authData: {userId, email, login}});
export default authReducer;