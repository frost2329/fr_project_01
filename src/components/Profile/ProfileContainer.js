import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostAC,
    getUserProfileTC,
    getUserStatusTC,
    updateUserStatusTC
} from "../../redux/profile_reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import {compose} from "redux";
import {getPosts, getProfile, getUserStatus} from "../../redux/profile_selectors";
import {getCurrentUserId} from "../../redux/auth_selectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfileTC(this.props.router.params.userId ?? this.props.currentUserId)
        this.props.getUserStatusTC(this.props.router.params.userId ?? this.props.currentUserId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     userStatus={this.props.userStatus}
                     posts={this.props.posts}
                     addPostAC={this.props.addPostAC}
                     updateUserStatusTC={this.props.updateUserStatusTC}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        userStatus: getUserStatus(state),
        posts: getPosts(state),
        currentUserId: getCurrentUserId(state)
    }
}
let mapDispatchToProps = {
    getUserProfileTC: getUserProfileTC,
    addPostAC: addPostAC,
    getUserStatusTC: getUserStatusTC,
    updateUserStatusTC: updateUserStatusTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer);



