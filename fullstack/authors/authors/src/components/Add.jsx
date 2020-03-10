import React, {useState} from 'react'
import {Link, navigate} from '@reach/router'
import Axios from 'axios'

const Add = () => {

    const [formState, setFormState] = useState({
        name:"",
    })

    const [errorState, setErrorState] = useState({
        errorName: "",

    })
    const onChangeHandler = (e)=>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:8000/api/v1/new', formState)
            .then(response => {
                if (response.data.errors){
                    console.log("ERRORS!")
                    setErrorState({
                        ...errorState,
                        errorName: response.data.errors.name.properties.message
                    })
                }else{
                    setFormState({
                        name:"",
                    })
                    navigate('/')
                }
            })
            .catch(error=>{
                console.log(error)
            })

    }
    return (
        <div>
            <Link to="/">Home</Link>
            {errorState.errorName.length?
            <p>{errorState.errorName}</p>:null}
            <h2>Add a new author: </h2>
            <form onSubmit={onSubmitHandler}>
                <tr><p>name: </p></tr>
                <tr><input type="text" name="name" value={formState.name} onChange={onChangeHandler}/></tr>
                <tr><Link to="/" >Cancel</Link> <button type="submit">Submit</button></tr>
            </form>
        </div>
    )

}

export default Add;
