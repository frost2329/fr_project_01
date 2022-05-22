import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostAC,
    getUserProfileTC,
    getUserStatusTC,
    updateNewPostDataAC,
    updatetUserStatusTC
} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfileTC(this.props.router.params.userId ?? this.props.auth.userId)
        this.props.getUserStatusTC(this.props.router.params.userId ?? this.props.auth.userId)
    }

    render() {
        return (
            <Profile profileState={this.props.profileState}
                     addPost={this.props.addPost}
                     updatePostText={this.props.updatePostText}
                     updatetUserStatusTC={this.props.updatetUserStatusTC}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileState: state.profileState,
        auth: state.auth
    }
}
let mapDispatchToProps = {
    getUserProfileTC: getUserProfileTC,
    addPost: addPostAC,
    updatePostText: updateNewPostDataAC,
    getUserStatusTC: getUserStatusTC,
    updatetUserStatusTC: updatetUserStatusTC

}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



