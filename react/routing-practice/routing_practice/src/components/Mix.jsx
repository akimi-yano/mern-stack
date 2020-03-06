import React from 'react'

const Mix = (props) => {
    let innerText = ""
    if(!isNaN(props.param)) {
        innerText = `The number is: ${props.param}`
    } else {
        if(props.param === "home") {
            innerText = "Welcome"
        } else {
            innerText = `The word is: ${props.param}`
        }
    }

    return (
        <div>
        {innerText}
        </div>
    )
}

export default Mix
