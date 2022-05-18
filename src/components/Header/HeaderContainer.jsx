import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setUserAuthData} from "../../redux/auth_reduser";
import {superAPI} from "../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        superAPI.auth()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    this.props.setUserAuthData(id, email, login);
                }
            });
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

let dispachForProps = {setUserAuthData}
export default connect(mapStateToProps, dispachForProps)(HeaderContainer);