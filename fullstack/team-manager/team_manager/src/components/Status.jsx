import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from '@reach/router'
import NavLink from './NavLink'

const Status = (props) => {
    const [state, setState] = useState([])
    const [gameState, setGameState] = useState(props.id)
    useEffect(() => {
        setGameState(props.id)
        Axios.get("http://localhost:8000/api/v1")
            .then(response => {
                console.log(response.data)
                setState(response.data)
            })
            .catch(error => console.log(error))
    }, [props.id])

    const onClickHandler = (e, item, index, num) => {
        for (let i = 0; i < item[`game${gameState}`].length; i++) {
            if (i === num) {
                item[`game${gameState}`][i] = 1
            } else {
                item[`game${gameState}`][i] = 0
            }
        }
        console.log(item[`game${gameState}`])

        Axios.put(`http://localhost:8000/api/v1/update/${item._id}/`, item)
            .then(response => {
                const temp = [...state]
                temp[index] = item;
                setState([...temp])
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>Player Status - Game</h1> {props.uri.includes(1) ? <h1>1</h1> : props.uri.includes(2) ? <h1>2</h1> : <h1>3</h1>}
            <NavLink to="/status/game/1">Game1</NavLink> | <NavLink to="/status/game/2">Game2</NavLink> | <NavLink to="/status/game/3">Game3</NavLink>
            <div><p style={{ display: 'inline-block' }}>Player Name</p><p style={{ display: 'inline-block', margin: '0px 500px' }}>Status</p></div>

            {state.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{ display: 'inline-block', width: '100px' }} >{item.name}</p>
                    <button style={{ display: 'inline-block', width: '100px', backgroundColor: item[`game${gameState}`][0] === 0 ? 'white' : 'green' }} name="playing" onClick={(e) => onClickHandler(e, item, index, 0)}>Playing</button>
                    <button style={{ display: 'inline-block', width: '100px', backgroundColor: item[`game${gameState}`][1] === 0 ? 'white' : 'red' }} name="notplaying" onClick={(e) => onClickHandler(e, item, index, 1)}>Not Playing</button>
                    <button style={{ display: 'inline-block', width: '100px', backgroundColor: item[`game${gameState}`][2] === 0 ? 'white' : 'yellow' }} name="undecided" onClick={(e) => onClickHandler(e, item, index, 2)}>Undecided</button>
                </div>
            ))
            }
        </div>
    )
}

export default Status
