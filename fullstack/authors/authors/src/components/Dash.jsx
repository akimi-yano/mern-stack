import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import {Router, Link} from '@reach/router';

const Dash = () => {
    const [state, setState] = useState([]);
    const [deleteState, setDeleteState] = useState(false)

    useEffect(()=>{
        Axios.get('http://localhost:8000/api/v1')
            .then(response => setState(response.data))
            .catch(error=>console.log(error))
    }, [deleteState])

    const deleteHandler=(e,item)=>{
        Axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
            .then(response=>setDeleteState(!deleteState))
            .catch(error=>console.log(error))
    }

    return (
        <div>
            <Link to="/new">Add an author </Link>
            <p>We have quotes by: </p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index)=>(
                    <tr key = {index}>
                        <td>{item.name}</td>
                        <td><Link to ={`/edit/${item._id}`}>Edit</Link><button onClick={(e)=>deleteHandler(e,item)}>Delete</button></td>
                    </tr>
                    ))
}
                </tbody>
            </table>
        </div>
    )
}

export default Dash
