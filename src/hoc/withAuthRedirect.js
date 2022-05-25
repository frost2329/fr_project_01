import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router";
import {useParams} from "react-router-dom";

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        let params = useParams();
        if (!props.isAuth && params.userId == null) {
            return <Navigate to='/login'/>
        } else {
            return <Component {...props}/>
        }
    }
    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthRedirect;