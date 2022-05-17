import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {setUserAuthData} from "../../redux/auth_reduser";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                debugger;
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
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