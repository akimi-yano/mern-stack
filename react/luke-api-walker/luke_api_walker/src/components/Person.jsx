import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router';

import axios from 'axios';

const Person = (props) => {
    const [state, setState] = useState({})
    useEffect(() => {
        axios.get(`https://swapi.co/api${props.uri}`)
        .then(response => {
            setState(response.data)
        })
        .catch(error => navigate('/error'))
    },[props.uri])
    return (
        <div>
            <h1>{state.name}</h1>
            <p>Height: {state.height}</p>
            <p>Hair Color: {state.hair_color}</p>
            <p>Eye Color: {state.eye_color}</p>
            <p>Skin Color: {state.skin_color}</p>
        </div>
    )
}

export default Person
