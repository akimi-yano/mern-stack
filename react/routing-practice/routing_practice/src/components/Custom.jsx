import React from 'react'

const Custom = (props) => {
    return (
        <div>
                <p style={{backgroundColor:props.color2, color:props.color}}>{props.param}</p>
        </div>
    )
}
export default Custom
