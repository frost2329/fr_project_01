import React from 'react';
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {addMessageAC, updateNewMessageDataAC} from "../../redux/messenger_reducer";

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