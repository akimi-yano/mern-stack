import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const Edit = (props) => {

    const [formState, setFormState] = useState({
        task: "",
        description: "",
        due: "1900-01-01",
        category: "1",
        taskError: "Task must be at least 3 characters long",
        descriptionError: "Description must be at least 5 characters long",
        dueError: "Due Date field must be filled out",
    })
    const [errorState, setErrorState] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response => setFormState({...formState,...response.data}))
            .catch(error => console.log(error))
    }, [props.id])

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formState.due)
        axios.put(`http://localhost:8000/api/v1/edit/${formState._id}`, formState)
            .then(response => {
                if (response.data.errors) {
                    const temp = []
                    for (let x in response.data.errors) {
                        temp.push(response.data.errors[x].message)
                    }
                    setErrorState([...temp])
                }
                else {
                    setFormState({
                        task: "",
                        description: "",
                        due: "1900-01-01",
                        category: "1"
                    });
                    navigate("/")
                }
            })
    }


    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Let's edit!</h2>
            {formState.task.length > 0 && formState.task.length < 3 ? <p>{formState.taskError}</p> : null}
            {formState.description.length > 0 && formState.description.length < 5 ? <p>{formState.descriptionError}</p> : null}
            {formState.due.length > 0 && formState.due.length <= 1 ? <p>{formState.dueError}</p> : null}

            {errorState.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <form onSubmit={onSubmitHandler}>
                <p>Task: </p>
                <input type="text" name="task" onChange={onChangeHandler} value={formState.task} />
                <p>Description: </p>
                <input type="text" name="description" onChange={onChangeHandler} value={formState.description} />
                <p>Due Date: </p>
                <input type="date" name="due" onChange={onChangeHandler} value={formState.due.length ? new Date(formState.due).toISOString().substring(0, 10) : ""} />
                <select name="category" onChange={onChangeHandler} value={formState.category}>
                    <option value="1">Category1</option>
                    <option value="2">Category2</option>
                    <option value="3">Category3</option>
                </select>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit
