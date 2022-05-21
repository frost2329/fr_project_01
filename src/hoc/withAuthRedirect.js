import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends  React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/login'/>
            }else {
                return <Component {...this.props}/>
            }
        }
    }
    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth:state.auth.isAuth
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}