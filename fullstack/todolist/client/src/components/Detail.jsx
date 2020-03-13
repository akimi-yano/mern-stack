import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
const Detail = (props) => {
    const [state, setState]=useState({
        task:"",
        due:"",
        description:"",
        category:"",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response=>setState(response.data))
            .catch(error=>console.log(error))
    },[])
    return (
            <div>
                <Link to="/">Home</Link>
                <h2>Task: {state.task}</h2>
                <p>Due Date: {state.due}</p>
                <p>Description: {state.description}</p>
                <p>Category: {state.category}</p>
            </div>
    )
    }
    

export default Detail
