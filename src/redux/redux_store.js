import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import messenger_reducer from "./messenger_reducer";

let reducers = combineReducers({
    profileState: profile_reducer,
    messengerState: messenger_reducer
})

let store = createStore(reducers);

export default store