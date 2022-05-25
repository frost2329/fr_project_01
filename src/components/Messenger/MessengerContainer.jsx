import Messenger from "./Messenger";
import {connect} from "react-redux";
import {addMessageAC} from "../../redux/messenger_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messengerState: state.messengerState
    }
}
let mapDispatchToProps =  {
    addMessageAC: addMessageAC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger);