import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>Login</p>
            <div>
                <Field placeHolder={"login"}
                       name={"login"}
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