import React, { useState } from 'react';
import Tab from './Tab';
import Content from './Content';

const Tabs = (props) => {
    const [clickState, setClickState] = useState({
        array:[
            {label:"Tab 1", content:"Tab 1 is showing here"},
            {label:"Tab 2", content:"Tab 2 is showing here"},
            {label:"Tab 3", content:"Tab 3 is showing here"},
        ],
        clicked: 0
    })
    const onClickHandler = (e) => {
        console.log(e.target.innerText);
        const temp = e.target.innerText;
        const clicked = parseInt(temp[temp.length - 1]) - 1
        setClickState({
            array:clickState.array,
            clicked:clicked
        })
    }
    return (
        <div>
        <h2>{props.title}</h2>
            {clickState.array.map((item,i) => (
                i == clickState.clicked ? <Tab key={i} label={item.label} handler={onClickHandler} buttonStyle="actual active"/> : <Tab key={i} label={item.label} handler={onClickHandler} buttonStyle="actual"/>
            ))}
            {clickState.array.map((item, i) => (
                i == clickState.clicked ? <Content key={i} content={item.content}/> : null
            ))}
        </div>
    )
}

export default Tabs;

