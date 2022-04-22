import React from 'react';
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {addMessageAC, updateNewMessageDataAC} from "../../../redux/messenger_reducer";

/*const MessengerContainer = (props) => {
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
                   addMessage={addMessage}/>
    )
}*/
let mapStateToProps = (state) => {
    return {
        messengerState: state.messengerState
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText(message_text) {
            dispatch(updateNewMessageDataAC(message_text));
        },
        addMessage() {
            dispatch(addMessageAC());
        }
    }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;