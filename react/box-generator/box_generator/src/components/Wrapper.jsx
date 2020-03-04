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
        temp.push({
            ...formState
        })
        setState({
            array: temp
        })
    };
    const onChangeHandler=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.name !== "color" ? e.target.value + "px" : e.target.value
        })
    };

    return(
        <div>
            <p>Color</p>
            <input type="text" name="color" onChange={onChangeHandler}/>
            <p>Height</p>
            <input type="text" name="height" onChange={onChangeHandler}/>
            <p>Width</p>
            <input type="text" name="width" onChange={onChangeHandler}/>
            
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