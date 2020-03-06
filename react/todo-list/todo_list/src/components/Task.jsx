import React, {useState} from 'react'

const Task = (props) => {
    return (
        <div className={props.style}>
            <p>{props.label}</p>
            <input type="checkbox" onClick={(e) => props.checkboxHandler(e, props.taskId)}></input>
            <button type="submit" onClick={(e) => props.deleteHandler(e, props.taskId)}>Delete</button>
        </div>
    )
}

export default Task
