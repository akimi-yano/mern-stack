import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Router, Link } from '@reach/router';
import  Styles from '../styles/Styles';
const Dash = () => {
    const [state, setState] = useState([]);
    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        Axios.get('http://localhost:8000/api/v1')
            .then(response => {
                let temp = response.data
                temp.sort((a, b) => {
                    const param = "name";
                    const direction = "asc";
                    if (a[param] > b[param]) {
                        return direction === "desc" ? -1 : 1
                    } else if (a[param] < b[param]) {
                        return direction === "desc" ? 1 : -1
                    } else {
                        return 0
                    }
                })
                setState([...temp])
            })
        .catch(error => console.log(error))
}, [deleteState])

const deleteHandler = (e, item) => {
    Axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
        .then(response => setDeleteState(!deleteState))
        .catch(error => console.log(error))
}

return (
    <div>
        <Link to="/new">Add an author </Link>
        <p>We have quotes by: </p>
        <table className="dashPage" style={Styles.table}>
            <thead>
                <tr>
                    <th style={Styles.th}>Author</th>
                    <th style={Styles.th}>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {state.map((item, index) => (
                    <tr key={index}>
                        <td style={Styles.td}>{item.name}</td>
                        <td style={Styles.td}><Link className="button"  to={`/edit/${item._id}`}>Edit</Link><button className="button"  onClick={(e) => deleteHandler(e, item)}>Delete</button></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
)
}

export default Dash
