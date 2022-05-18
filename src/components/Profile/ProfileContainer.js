import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/profile_reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {superAPI} from "../api/api";
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        superAPI.getProfile(userId)
            .then((response) => {
                this.props.setProfile(response);
            });
    }
    render() {
        return (
            <Profile profileState={this.props.profileState}/>
        )
    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
    return {
        profileState: state.profileState
    }
}
let WithUrlDataProfileContainer = withRouter(ProfileContainer)

let dispachForProps = {
    setProfile
}
export default connect(mapStateToProps, dispachForProps)(WithUrlDataProfileContainer);

