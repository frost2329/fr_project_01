import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import s from "./Login.module.css";

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
                       component={Input}
                       validate={required}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    return (
        <div>
            <LoginReduxForm onSubmit={(formData) => {
                props.loginTC(formData)
                console.log(formData)
            }}/>
        </div>
    )
}


export default Login;