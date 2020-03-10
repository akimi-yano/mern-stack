import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';

const Edit = (props) => {
    const [formState, setFormState] = useState({
        name:"",
    })
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response => setFormState(response.data))
            .catch(error=> console.log(error))
        }, [])
    const onChangeHandler=(e)=>{
        setFormState({
                ...formState,
                [e.target.name]:e.target.value
    })
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/v1/edit/${formState._id}`, formState)
            .then(response=>{
                setFormState({
                    name:"",
                })
                navigate('/')
            })
            .catch(error=>console.log(error))
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Edit this author: </h2>
            <form onSubmit={onSubmitHandler}>
                <tr><p>name: </p></tr>
                <tr><input type="text" value={formState.name} name="name" onChange={onChangeHandler}/></tr>
                <tr><Link to="/">Cancel</Link> <button type="submit">Submit</button></tr>
            </form>
        </div>
    )
};

export default Edit
