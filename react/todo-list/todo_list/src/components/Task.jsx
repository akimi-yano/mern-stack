import React, {useState} from 'react'

const Task = (props) => {
    return (
        <div className={props.style}>
            <p>{props.label}</p>
            <input type="checkbox" onClick={props.checkboxHandler} name={props.taskId}></input>
            <button type="submit" onClick={props.deleteHandler} name={props.taskId}>Delete</button>
        </div>
    )
}

export default Task
