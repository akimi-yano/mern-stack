import React, {useState} from 'react';
import Task from './Task';

const TodoList=()=>{

const [checkState, setCheckState] = useState({
    tasks:[],
    checkedTasks:[],
    deletedTasks:[]
})
const [formState, setFormState] = useState({
    taskName:""
})

const onCheckboxClickHandler=(e)=>{
    const temp = checkState.checkedTasks
    if (e.target.checked) {
        temp.push(parseInt(e.target.name))
    } else {
        temp.splice(temp.indexOf(e.target.name), 1)
    }
    console.log(temp)
    setCheckState({
        tasks: checkState.tasks,
        checkedTasks:temp,
        deletedTasks:checkState.deletedTasks
    })
}
const onDeleteHandler=(e)=>{
    const temp = checkState.deletedTasks
        temp.push(parseInt(e.target.name))
    console.log(temp)
    setCheckState({
        tasks: checkState.tasks,
        checkedTasks: checkState.checkedTasks,
        deletedTasks: temp
    })
    
}
const onSubmitHandler=(e)=>{
    const temp=checkState.tasks
    temp.push(
        formState.taskName
    )
        console.log(temp)
    setCheckState({
        tasks: temp,
        checkedTasks:checkState.checkedTasks,
        deletedTasks:checkState.deletedTasks
    })
    setFormState({
        taskName:"",
    })
}

const onChangeHandler=(e)=>{
    setFormState({
        taskName:e.target.value
    })

}   
return(
    <div>
        {checkState.tasks
        .map((item,i)=>{
            let style = "" // TODO fix
            if (checkState.checkedTasks.indexOf(i)>-1){
                style = "checked"
            }
            return  (
                <Task taskId={i} label={item} checkboxHandler={onCheckboxClickHandler} style={style} deleteHandler={onDeleteHandler}/>
            )
            })
        .filter((item, i) => checkState.deletedTasks.indexOf(i)<=-1)}
        <input type="text" name="task" onChange={onChangeHandler} value={formState.taskName}></input>
        <button type="submit" onClick={onSubmitHandler}>Add</button>
    </div>
)
}
export default TodoList