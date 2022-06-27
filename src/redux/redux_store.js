import {combineReducers, createStore, applyMiddleware} from "redux";
import messengerReducer from "./messenger_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app_reducer";

let reducers = combineReducers({
    profileState: profileReducer,
    messengerState: messengerReducer,
    usersState: usersReducer,
    auth: authReducer,
    appState: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store
