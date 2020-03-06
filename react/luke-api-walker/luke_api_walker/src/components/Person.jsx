import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router';

import axios from 'axios';

const Person = (props) => {
    const [state, setState] = useState({})
    const [home, setHome]  = useState({})
    useEffect(() => {
        axios.get(`https://swapi.co/api${props.uri}`)
        .then(response => {
            setState(response.data)
            console.log(response.data.homeworld)
            return axios.get(response.data.homeworld)
        })
        .then(response => {
            setHome(response.data)
        })
        .catch(error => {
            console.log(error)
            return navigate('/error')
        })
    },[props.uri])
    return (
        <div>
            <h1>{state.name}</h1>
            <p>Height: {state.height}</p>
            <p>Hair Color: {state.hair_color}</p>
            <p>Eye Color: {state.eye_color}</p>
            <p>Skin Color: {state.skin_color}</p>
            <p>Homeworld: <a href={state.homeworld} target='_blank'>{home.name}</a></p>
        </div>
    )
}

export default Person
