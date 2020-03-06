import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router';
import axios from 'axios';

const Starship = (props) => {
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
        </div>
    )
}

export default Starship
