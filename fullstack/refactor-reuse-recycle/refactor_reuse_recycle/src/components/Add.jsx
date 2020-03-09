import React, {useState} from 'react'
import Axios from 'axios'
import {navigate} from '@reach/router'


const Add = () => {

    const [formState, setFormState] = useState({
        title: "",
        price: "",
        description: ""
    })

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
        
    )
}

export default Add
