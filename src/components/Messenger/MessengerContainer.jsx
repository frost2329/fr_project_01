import Messenger from "./Messenger";
import {connect} from "react-redux";
import {addMessageAC, updateNewMessageDataAC} from "../../redux/messenger_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
let withAuthRedirectMessengerContainer = withAuthRedirect(Messenger)

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectMessengerContainer);

export default MessengerContainer;