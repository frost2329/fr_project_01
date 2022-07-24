import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostAC,
    getUserProfileTC,
    getUserStatusTC, updateAvatarImageTC, updateProfileDataTC,
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.userId != this.props.router.params.userId) {
            this.props.getUserProfileTC(this.props.router.params.userId ?? this.props.currentUserId)
            this.props.getUserStatusTC(this.props.router.params.userId ?? this.props.currentUserId)
        }

    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     isOwner={!this.props.router.params.userId}
                     userStatus={this.props.userStatus}
                     posts={this.props.posts}
                     addPostAC={this.props.addPostAC}
                     updateProfileDataTC={this.props.updateProfileDataTC}
                     updateUserStatusTC={this.props.updateUserStatusTC}
                     updateAvatarImageTC={this.props.updateAvatarImageTC}
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
    updateProfileDataTC: updateProfileDataTC,
    updateUserStatusTC: updateUserStatusTC,
    updateAvatarImageTC: updateAvatarImageTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer);



