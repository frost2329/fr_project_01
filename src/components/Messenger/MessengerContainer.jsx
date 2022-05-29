import Messenger from "./Messenger";
import {connect} from "react-redux";
import {addMessageAC} from "../../redux/messenger_reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../redux/messenger_selectors";

let mapStateToProps = (state) => {
    return {
        messages: getMessages(state),
        dialogs: getDialogs(state)
    }
}
let mapDispatchToProps =  {
    addMessageAC: addMessageAC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger);