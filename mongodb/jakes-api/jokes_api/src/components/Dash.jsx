import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Router, Link } from '@reach/router';

const Dash = () => {
    const [state, setstate] = useState([]);
    const [deleteState, setDeleteState] = useState(false);
    useEffect(() => {
        Axios.get('http://localhost:8000/api/v1')
            .then(response => setstate([...response.data]))
            .catch(error => console.log(error))
    }, [deleteState])

    const deleteEntry = (e, item) => {
        Axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
        .then(response => setDeleteState(!deleteState))
        .catch(error => console.log(error))
    }



    return (
        <div>
            <Link to="/new"> Add a new one!</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index) => (
                        <tr key={index}>
                            <td><Link to={`/show/${item._id}`}>{item.name}</Link></td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={(e) => deleteEntry(e, item)}>Delete</button> |
                                <Link to={`/edit/${item._id}`}>Edit</Link>
                        </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dash
