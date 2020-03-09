import React, {useEffect, useState} from 'react'
import {navigate} from '@reach/router'
import Axios from 'axios'

const Edit = (props) => {
    const [formState, setFormState]  = useState({
        title: "",
        price: "",
        description: ""
    })
    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
        .then(response=>setFormState(response.data))
        .catch(error => console.log(error))
    },[])
    const onChangeHandler=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        Axios.put( `http://localhost:8000/api/v1/update/${formState._id}`, formState)
        .then(response =>{
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
            <h1>Product Manager - Let's Edit</h1>
            <form onSubmit={onSubmitHandler}>
                <p>Title: </p><input type="text" name="title" value={formState.title} onChange={onChangeHandler} />
                <p>Price: </p><input type="text" name="price" value={formState.price} onChange={onChangeHandler} />
                <p>Description: </p><input type="text" name="description" value={formState.description} onChange={onChangeHandler} />
                <button type="submit">Update</button>
            </form>
        </div>
    
    )
}

export default Edit
