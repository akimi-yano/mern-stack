import React,{useEffect, useState} from 'react'
import {navigate} from '@reach/router'
import Axios from 'axios'

const Edit = (props) => {
    const [formState, setFormState] = useState({
        name:"",
        age:0
    })
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response => setFormState(response.data))
            .catch(error => console.log(error))
    }, [])
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/v1/update/${formState._id}`, formState)
        .then(response => {
            setFormState({
                name:"",
                age:0
            })
            navigate("/")
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={formState.name} name="name" onChange={onChangeHandler}/>
                <input type="number" value={formState.age} name="age" onChange={onChangeHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit
