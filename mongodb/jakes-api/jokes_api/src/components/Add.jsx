import React, { useState } from 'react'
import {navigate} from '@reach/router';
import Axios from 'axios'

const Add = () => {
    const [formState, setFormState] = useState({
        name:"",
        age:0
    })
    const [errorState, setErrorState] = useState({
        errorName:"",
        errorAge:"",
    })
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/v1/new', formState)
        .then(response => {
            if(response.data.errors) {
                console.log("oh no")
                setErrorState({
                    ...errorState,
                    errorName:response.data.errors.name.properties.message
                })
            } else {
                setFormState({
                    name:"",
                    age:0
                })
                navigate("/")
            }
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {errorState.errorName.length ? 
            <p>{errorState.errorName}</p> :null
            }
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={formState.name} name="name" onChange={onChangeHandler}/>
                <input type="number" value={formState.age} name="age" onChange={onChangeHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Add
