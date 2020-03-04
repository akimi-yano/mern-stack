import React from 'react';

const Output = ({form}) => {
    console.log(form);
    const formList = [];
    for(let element in form) {
        formList.push((<li>{element}: {form[element]}</li>))
    }
    return formList;
}

export default Output;