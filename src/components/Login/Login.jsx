import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, InputPassword} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import s from "./Login.module.css";
import {loginTC} from "../../redux/auth_reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Navigate} from "react-router";
import {getIsAuth} from "../../redux/auth_selectors";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>Login</div>
            {props.error && (<div className={s.error}>{props.error}</div>)}
            <div>
                <Field placeHolder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={required}
                />
            </div>
            <div>
                <Field placeHolder={"Password"}
                       name={"password"}
                       component={InputPassword}
                       validate={required}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl} alt=""/>
                    <Field placeHolder={"Captcha"} name={"captcha"} component={Input} validate={required}/>
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return (
        <div>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={(formData) => {
                props.loginTC(formData)
            }}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        captchaUrl: state.auth.captchaUrl
    }
}
let mapDispatchToProps = {
    loginTC: loginTC
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Login);

