import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileTC} from "../../redux/profile_reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
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

let mapDispatchToProps = {
    setProfileTC:setProfileTC
}
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer);

