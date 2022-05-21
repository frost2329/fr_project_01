import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPostAC, setProfileTC, updateNewPostDataAC} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfileTC(this.props.router.params.userId ?? 2)
    }
    render() {
        return (
            <Profile profileState={this.props.profileState}
                     addPost={this.props.addPost}
                     updatePostText={this.props.updatePostText}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profileState: state.profileState
    }
}
let mapDispatchToProps = {
    setProfileTC:setProfileTC,
    addPost: addPostAC,
    updatePostText: updateNewPostDataAC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



