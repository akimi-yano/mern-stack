import React, { useState } from 'react';

import Axios from 'axios'
import { navigate } from '@reach/router';

const Add = () => {
    const [formState, setFormState] = useState({
        name: "",
        position: "",
        game1: [0, 0, 1],
        game2: [0, 0, 1],
        game3: [0, 0, 1],
        nameError: "Name must be at least two characters",
        positionError: "Position must be at least two characters"
    })
    const [errorState, setErrorState] = useState({
        errorName: "",
    })
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/v1/new", formState)
            .then(response => {
                if (response.data.errors) {
                    setErrorState({
                        ...errorState,
                        errorName: response.data.errors.name.properties.message
                    })
                } else {
                    setFormState({
                        name: "",
                        position: "",
                        game1: [0, 0, 1],
                        game2: [0, 0, 1],
                        game3: [0, 0, 1],
                    })
                    navigate('/players/list')
                }
            })
            .catch(error => { console.log(error) })

    }
    return (
        <div>
            {errorState.errorName.length ?
                <p>{errorState.errorName}</p> : null}
            {/* {formState.nameError !== undefined && formState.nameError.length ?
                <p>{formState.nameError}</p> : null} */}
            <h1>Add Player</h1>
            <div>
                {(formState.name.length > 0 && formState.name.length < 2) ? (<p>{formState.nameError}</p>) : null}
                {(formState.position.length > 0 && formState.position.length < 2) ? (<p>{formState.positionError}</p>) : null}

                <form onSubmit={onSubmitHandler}>
                    <p>Player Name: </p>
                    <input type="text" name="name" onChange={onChangeHandler} value={formState.name}></input>
                    <p>Preffered Position: </p>
                    <input type="text" name="position" onChange={onChangeHandler} value={formState.position}></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Add
