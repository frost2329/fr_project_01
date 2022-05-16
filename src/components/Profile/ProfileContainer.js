import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/profile_reducer";
import * as axios from "axios";
class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) /*${this.props.profileState.profile.userId}*/
            .then((response) => {
                this.props.setProfile(response.data);
            });
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
let dispachForProps = {
    setProfile
}
export default connect(mapStateToProps, dispachForProps)(ProfileContainer);

