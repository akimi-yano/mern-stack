import React from 'react';
const RegisterForm = ({form, setForm}) => {
    const onChangeHandler = event => {

        const firstNameTooShort = event.target.name == 'firstName'
        ? event.target.value.length < 2
        : form.firstName !== undefined && form.firstName.length < 2

        const lastNameTooShort = event.target.name == 'lastName'
        ? event.target.value.length <2
        : form.lastName !== undefined && form.lastName.length <2

        const emailTooShort = event.target.name == 'email'
        ? event.target.value.length <5
        : form.email !== undefined && form.email.length <5

        const passwordTooShort = event.target.name == 'password'
        ? event.target.value.length <8
        : form.password !== undefined && form.password.length <8

        let passwordUnmatch;
        if (event.target.name =='confirmPassword') {
            passwordUnmatch = event.target.value !== form.password
        } else if (event.target.name =='password' && form.confirmPassword !== undefined) {
            passwordUnmatch = event.target.value !== form.confirmPassword
        } else {
            passwordUnmatch = form.confirmPassword !== undefined && form.confirmPassword !== form.password
        }

        setForm({
            ...form,
            [event.target.name]: event.target.value,
            firstNameTooShort: firstNameTooShort,
            lastNameTooShort: lastNameTooShort,
            emailTooShort: emailTooShort,
            passwordTooShort: passwordTooShort,
            passwordUnmatch: passwordUnmatch
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(form);
    }


    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {form.firstNameTooShort ? (<p>ERROR: firstName must be at least 2 characters</p>) : (<></>)}
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {form.lastNameTooShort ? (<p>ERROR: lastName must be at least 2 characters</p>) : (<></>)}
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {form.emailTooShort ? (<p>ERROR: email must be at least 5 characters</p>) : (<></>)}
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {form.passwordTooShort ? (<p>ERROR: password must be at least 8 characters</p>) : (<></>)}
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                {form.passwordUnmatch ? (<p>ERROR: passwords do not match</p>) : (<></>)}
                <br/>   
                <input type="submit" />     
            </form>
        </div>
    );
}


export default RegisterForm;
