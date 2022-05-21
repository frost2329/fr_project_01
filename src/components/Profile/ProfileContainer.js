import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileTC} from "../../redux/profile_reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let withAuthRedirectProfileContainer = withAuthRedirect(ProfileContainer)

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
let WithUrlDataProfileContainer = withRouter(withAuthRedirectProfileContainer)

let mapStateToProps = (state) => {
    return {
        profileState: state.profileState
    }
}
let mapDispatchToProps = {
    setProfileTC:setProfileTC
}
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataProfileContainer);

