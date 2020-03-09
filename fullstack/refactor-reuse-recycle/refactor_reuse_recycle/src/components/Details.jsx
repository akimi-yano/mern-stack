import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Link, navigate} from '@reach/router'

const Details = (props) => {
    const [state, setState] = useState({
        title: "",
        price: "",
        description: ""
    })
    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response=>setState(response.data))
            .catch(error => console.log(error))
    },[])
    const deleteEntry=()=>{
        Axios.delete(`http://localhost:8000/api/v1/delete/${state._id}`)
            .then(response=>{
                navigate('/')
            })

            .catch(error=>console.log(error))

    }

    return (
        <div>
            <h1>{state.title}</h1>
            <p>Price: ${state.price}</p>
            <p>Description: {state.description}</p> 
            <Link to={`/${state._id}/edit`}>Edit</Link>
            <button onClick={deleteEntry}>Delete</button>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Details
