import React, {useState} from 'react';
import axios from 'axios'
import {navigate, Link} from '@reach/router'
import io from 'socket.io-client'


const Add = () => {
    const [socket]=useState(io(':8000'))

    const [formState, setFormState]=useState({
        title: "",
        description: "",
    })
    const [errorState, setErrorState]=useState({
        errorTitle:"",
        errorDescription:""
    })
    const onChangeHandler=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/v1/new", formState)
        .then(response=>{
            if (response.data.errors){
                console.log(response.data.errors)
                setErrorState({
                    ...errorState,
                    errorTitle: response.data.errors.title ? response.data.errors.title.message : "",
                    errorDescription: response.data.errors.description ? response.data.errors.description.message : ""
                })
            }
            else{
                socket.emit("sentMessage", null)
                setFormState({
                    title:"",
                    description:"",
                })
                navigate("/")
            }
        })
        .catch(error=>{console.log(error)
        })
        
    }

    return (
        <div>
            <Link to="/">Home</Link>
            {errorState.errorTitle.length?
            <p>{errorState.errorTitle}</p>:null}
            {errorState.errorDescription.length?
            <p>{errorState.errorDescription}</p>:null}
            
            <form onSubmit={onSubmitHandler}>
            <p>Title: </p><input type="text" name="title" onChange={onChangeHandler} value={formState.title}/>
            <p>Description: </p><input type="text" name="description" onChange={onChangeHandler} value={formState.description}/>
            <button>Add</button>
            </form>
        </div>
    )
}

export default Add
