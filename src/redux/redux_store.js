import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reduser";

let reducers = combineReducers({
    profileState: profileReducer,
    messengerState: messengerReducer,
    usersState: usersReducer
})

let store = createStore(reducers);

export default store