import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reduser";
import authReducer from "./auth_reduser";

let reducers = combineReducers({
    profileState: profileReducer,
    messengerState: messengerReducer,
    usersState: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store
