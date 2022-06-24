import React from 'react';
import s from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.form_control +' '+ (hasError ? s.error: "") } >
            <div>
                <textarea {...input} {...props} ></textarea>
            </div>
            <div>
                {meta.touched && meta.error && <span className={s.text_error}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.form_control +' '+ (hasError ? s.error: "")}>
            <div>
                <input {...input} {...props} ></input>
            </div>
            <div>
                {meta.touched && meta.error && <span className={s.text_error}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const InputPassword = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.form_control +' '+ (hasError ? s.error: "")}>
            <div>
                <input type='password' {...input} {...props} ></input>
            </div>
            <div>
                {meta.touched && meta.error && <span className={s.text_error}>{meta.error}</span>}
            </div>
        </div>
    )
}