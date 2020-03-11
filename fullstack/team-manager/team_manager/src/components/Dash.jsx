import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { navigate } from '@reach/router';

const Dash = () => {
    const [state, setState] = useState([]);
    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        Axios.get("http://localhost:8000/api/v1")
            .then(response => setState(response.data))
            .catch(error => console.log(error))
    }, [deleteState])

    const onDeleteHandler = (e, item) => {
        if (window.confirm('Are you sure you want to delete this player?')) {
            Axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
            .then(response => setDeleteState(!deleteState))
            .catch(error => console.log(error))
        } else {
            navigate('/players/list')
        }
        // the below is if  I want to just  ask if it is yes
        // alert("Are you sure you want to delete this player?")
        // Axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
        //     .then(response => setDeleteState(!deleteState))
        //     .catch(error => console.log(error))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {state.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td><button onClick={(e) => onDeleteHandler(e, item)}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Dash
