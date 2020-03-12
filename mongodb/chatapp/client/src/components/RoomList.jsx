import React from 'react'

const RoomList = (props) => {
    const onClickHandler = (e, index) => {
        props.selectors.setSelectedRoom(index)
        props.joinFunction(index);
    }
    return (
        <div>
            {props.rooms.map((item, index) => (
                <div key={index}>
                    <h1 onClick={(e) => onClickHandler(e, index)}>Room {item.roomId}</h1>
                </div>
            ))}
        </div>
    )
}

export default RoomList
