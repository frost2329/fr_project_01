import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth_reduser";
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <Login loginTC={this.props.loginTC}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
let mapDispatchToProps = {
    loginTC: loginTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);

