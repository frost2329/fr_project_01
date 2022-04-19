import React from 'react';
import {addMessageAC, updateNewMessageDataAC} from "../../../redux/store";
import Messenger from "./Messenger";

const MessengerContainer = (props) => {
    let state = props.store.getState();

    let updateMessageText = (message_text) => {
        props.store.dispatch(updateNewMessageDataAC(message_text));
    }
    let addMessage = () => {
        props.store.dispatch(addMessageAC());
    }
    return (
        <Messenger messengerState={state.messengerState}
                   updateMessageText={updateMessageText}
                   addMessage={addMessage}
        />
    )
}

export default MessengerContainer;