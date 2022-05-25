import {authTC} from "./auth_reduser";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const setInitializedAC = () => ({type: SET_INITIALIZED});
export  const initializationTC =  () => {
    return (dispatch) => {
        dispatch(authTC())
            .then(() => {
                dispatch(setInitializedAC())
            });
    }
}

export default appReducer;