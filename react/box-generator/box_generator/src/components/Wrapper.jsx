import React, { useState } from 'react';
import Box from './Box';

const Wrapper = (props) =>{
    const [state, setState] = useState({
        array: []
    })

    const [formState, setFormState] = useState({
        color: "",
        height:"",
        width:"",
    })
    const onClickHandler=(e)=>{
        const temp = state.array
        const height = formState.height + "px";
        const width = formState.width + "px";
        temp.push({
            ...formState,
            height,
            width
        })
        setState({
            array: temp
        })
        setFormState({
            color: "",
            height:"",
            width:"",
        })
    };
    const onChangeHandler=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    };

    return(
        <div>
            <p>Color</p>
            <input type="text" name="color" onChange={onChangeHandler} value={formState.color}/>
            <p>Height</p>
            <input type="text" name="height" onChange={onChangeHandler} value={formState.height}/>
            <p>Width</p>
            <input type="text" name="width" onChange={onChangeHandler} value={formState.width}/>
            
            <button onClick={onClickHandler}>Add</button>
            <div>
                {state.array.map((item,i)=>(
                    <Box key={i} width={item.width} height={item.height} bgColor={item.color}/>
                )
                )}
            </div>
        </div>
    )
}
export default Wrapper;