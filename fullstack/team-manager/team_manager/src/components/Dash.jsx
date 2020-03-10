import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Dash = () => {
    const [state, setState] = useState([]);
    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        Axios.get("http://localhost:8000/api/v1")
            .then(response => setState(response.data))
            .catch(error => console.log(error))
    }, [deleteState])

    const onDeleteHandler = (e, item) => {
        alert("Are you sure you want to delete this player?")
        Axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
            .then(response => setDeleteState(!deleteState))
            .catch(error => console.log(error))
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
