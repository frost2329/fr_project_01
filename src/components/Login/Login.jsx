import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>Login</p>
            <div>
                <Field placeHolder={"login"}  name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeHolder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    return (
        <div>
            <LoginReduxForm onSubmit={(formData)=>{
                props.loginTC(formData)
                console.log(formData)
            }}/>
        </div>
    )
}


export default Login;