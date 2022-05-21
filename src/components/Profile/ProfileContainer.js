import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileTC} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfileTC(this.props.router.params.userId ?? 2)
    }
    render() {
        return (
            <Profile profileState={this.props.profileState}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileState: state.profileState
    }
}
let mapDispatchToProps = {
    setProfileTC:setProfileTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



