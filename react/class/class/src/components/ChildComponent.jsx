import React from 'react'

function ChildComponent(props) {
    return (
        <div onClick={props.divClickedHandler}>
            This is the child div
        </div>
    )
}

export default ChildComponent
