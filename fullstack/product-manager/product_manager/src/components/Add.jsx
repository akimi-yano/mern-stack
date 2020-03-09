import React, {useState} from 'react'
import Axios from 'axios'
import {navigate} from '@reach/router'


const Add = () => {

    const [formState, setFormState] = useState({
        title: "",
        price: "",
        description: ""
    })
    const onChangeHandler = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:8000/api/v1/new', formState)
        .then(response =>{
            console.log(response)
            setFormState({
                title: "",
                price: "",
                description: ""
            })
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Product Manager - Let's Add</h1>
            <form onSubmit={onSubmitHandler}>
                <p>Title: </p><input type="text" name="title" value={formState.title} onChange={onChangeHandler} />
                <p>Price: </p><input type="text" name="price" value={formState.price} onChange={onChangeHandler} />
                <p>Description: </p><input type="text" name="description" value={formState.description} onChange={onChangeHandler} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Add
