import React, {useState} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'


const Add = () => {
    const [formState, setFormState] = useState({
        project:"",
        due:"",
        category:"1",
        projectError: "Project must be at least 3 characters long",
        dueError: "Due Date is required"
    })
    const [errorState, setErrorState] = useState([])
    const onChangeHandler=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }
    // console.log(formState.due)
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/v1/new", formState)
        .then(response=>{
            if (response.data.errors){
                const temp = []
                for (let x in response.data.errors){
                    temp.push(response.data.errors[x].message)
                }
                setErrorState([...temp])
            }
            else{
                setFormState({
                    project:"",
                    due:"",
                    category:"1",
                })
                navigate('/')
            }
        })
        .catch(error=>{console.log(error)
        })
    }

    return (
        <div>
            <Link style={{marginLeft:"1000px"}} to="/">Back to Dashboard</Link>
            <h3>Plan a new project</h3>
            <div className="border border-secondary">
            <form onSubmit={onSubmitHandler}>
                <div style={{display: "block", margin: "20px auto" }}>
                <p style={{display: "inline-block"}}>Project: </p>
                <input style={{display: "inline-block"}} type="text" name="project" value={formState.project} onChange={onChangeHandler}/>
                </div>
                <div style={{display: "block", margin: "20px auto"}}>

                <p style={{display: "inline-block"}}>Due Date: </p>
                <input style={{display: "inline-block"}} type="date" name="due" onChange={onChangeHandler} value={formState.due.length ? new Date(formState.due).toISOString().substring(0,10):""}/>
                </div>
                {formState.project.length>0&&formState.project.length<3?
                <button style={{display: "block", margin: "20px auto"}} className="btn btn-info" type="submit" disabled>Plan Project</button>:
                <button style={{display: "block", margin: "20px auto"}} className="btn btn-info" type="submit">Plan Project</button>}
            </form>
            </div>
            {formState.project.length>0&&formState.project.length<3?<p>{formState.projectError}</p>:null}
            {formState.due.length>0&&formState.due.length<=1?<p>{formState.dueError}</p>:null}           

            {errorState.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default Add
