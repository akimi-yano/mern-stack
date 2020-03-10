import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import Axios from 'axios';
import Styles from '../styles/Styles'

const Edit = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        errorMessage: ""
    })
    const [errorState, setErrorState] = useState({
        errorName: "",

    })
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response => {
                console.log(response)
                if (response.data.path == "_id") {
                    setFormState({
                        ...formState,
                        errorMessage: `We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?`
                    })
                } else {
                    setFormState(response.data)

                }
            })
            .catch(error => console.log(error))
    }, [])
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/v1/edit/${formState._id}`, formState)
            .then(response => {
                if (response.data.errors) {

                    console.log("ERRORS!")
                    setErrorState({
                        ...errorState,
                        errorName: response.data.errors.name.properties.message
                    })
                }
                else {


                    setFormState({
                        name: "",
                        errorMessage: ""
                    })
                    navigate('/')
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>

            <Link to="/">Home</Link>
            {formState.errorMessage ? (
                <div>
                    <p>{formState.errorMessage}</p>
                    <Link to='/new'>Add a new author</Link>
                </div>
            ) :
                <div>
                    {errorState.errorName.length ?
                        <p>{errorState.errorName}</p> : null}
                    <h2>Edit this author: </h2>
                    <form onSubmit={onSubmitHandler}>

                        <p>name: </p>
                        <input style={Styles.input} type="text" value={formState.name} name="name" onChange={onChangeHandler} />
                        <Link className="button" to="/">Cancel</Link> <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            }

        </div>
    )
};

export default Edit
