import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {authTC} from "../../redux/auth_reduser";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authTC()
    }
    render() {
        return (
            <Header userLogin={this.props.userLogin}
                    isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userLogin: state.auth.userLogin,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = {authTC: authTC}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer);