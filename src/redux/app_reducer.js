import {authTC} from "./auth_reducer";

const SET_INITIALIZED = 'app_reducer/SET_INITIALIZED';
const SET_ERROR = 'app_reducer/SET_ERROR';
const REMOVE_ERROR = 'app_reducer/REMOVE_ERROR';

let initialState = {
    initialized: false,
    errors: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state,
                initialized: true
            }
        case SET_ERROR:
            debugger
            return {...state,
                errors: [
                    ...state.errors,
                    action.errorData
                ]
            }
        case REMOVE_ERROR:
            return {...state,
                errors: [...state.errors.filter(id => id === action.errorId)]
            }
        default:
            return state;
    }
}
export const setInitializedAC = () => ({type: SET_INITIALIZED});
export const setErrorAC = (errorData) => ({type: SET_ERROR, errorData});
export const removeErrorAC = (errorId) => ({type: REMOVE_ERROR, errorId:errorId});

export  const initializationTC =  () => {
    return (dispatch) => {
        dispatch(authTC())
            .then(() => {
                dispatch(setInitializedAC())
            });
    }
}

export  const showErrorTC =  (errorMessage) => {
    return (dispatch, getState) => {
        let currentErrorId = getState().appState.errors.length
        dispatch(setErrorAC({id: currentErrorId, errorMessage:errorMessage}))
        console.log(currentErrorId)
        debugger
        window.setTimeout(()=>{dispatch(removeErrorAC(currentErrorId))}, 2000);
    }
}



export default appReducer;