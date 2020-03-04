import React from 'react';

const formFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];

const Output = ({form}) => {
    console.log(form);
    const formList = [];
    for(let element in form) {
        console.log(formFields, element, element in formFields);
        if (formFields.indexOf(element) >= 0) {
            formList.push((<li>{element}: {form[element]}</li>))
        }
    }
    return formList;
}

export default Output;