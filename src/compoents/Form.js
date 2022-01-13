import React from 'react'
import { Field, formValues, reduxForm, reset } from 'redux-form'
import  './form.css'

function Form(props) {

    let renderError = ({error, touched})=>{
        if(touched && error) {
            return (
                <div>
                    <div className='error'>{error}</div>
                </div>
            )
        }
    }

let renderInput = ({ input, placeholder, meta }) => {

        return (
            <div className='filed'>
                <input {...input} placeholder={placeholder}
                autoComplete='off' />
                {renderError(meta)}
            </div>

            
        )


    }

    //onsubmit
    let onSubmit = (formValues,dispatch) => {
       console.log(formValues);
        dispatch(reset('loginForm'))


    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="title" component={renderInput} placeholder='enter title' />
            <Field name="description" component={renderInput} placeholder='enter description' />


            <button style={{ backgroundColor: "gray" }}>Submit</button>
        </form>
    )
}


//validation 

let validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "Title is required"
    }

    if (!formValues.description) {
        errors.description = "Description is required"
    }
    return errors
}

export default reduxForm({
    form: "loginForm",
    validate
})(Form)
