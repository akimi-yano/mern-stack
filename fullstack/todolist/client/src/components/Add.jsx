import React, {useState} from 'react'
import axios from 'axios'
import {navigate, Link} from '@reach/router'

const Add = () => {

    const [formState, setFormState] = useState({
        task:"",
        description:"",
        due:"",
        category:"1",
        reviews: [],
        taskError:"Task must be at least 3 characters long",
        descriptionError: "Description must be at least 5 characters long",
        dueError:"Due Date field must be filled out",

    })
    const [errorState, setErrorState] = useState([])

    const onChangeHandler=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/new', formState)
            .then(response=>{
                console.log(response.data)
                if (response.data.errors){
                    const temp = []
                    for(let x in response.data.errors) {
                        temp.push(response.data.errors[x].message)
                    }
                    setErrorState([...temp])
                }
                else{
                setFormState({
                    task:"",
                    description:"",
                    due:"",
                    category:"1"
                });
                navigate("/")
                }
            })
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Let's add a new task!</h1>
            {formState.task.length>0&&formState.task.length<3?<p>{formState.taskError}</p>:null}
            {formState.description.length>0&&formState.description.length<5?<p>{formState.descriptionError}</p>:null}
            {formState.due.length>0&&formState.due.length<=1?<p>{formState.dueError}</p>:null}           

            {errorState.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <form onSubmit={onSubmitHandler}>
                <p>Task: </p>
                <input type="text" name="task" onChange={onChangeHandler} value={formState.task}/>
                <p>Description: </p>
                <input type="text" name="description" onChange={onChangeHandler} value={formState.description} />
                <p>Due Date: </p>
                <input type="date" name="due" onChange={onChangeHandler} value={formState.due.length ? new Date(formState.due).toISOString().substring(0,10):""}/>
                <select name="category" onChange={onChangeHandler} value={formState.category}>
                    <option value="1">Category1</option>
                    <option value="2">Category2</option>
                    <option value="3">Category3</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add
