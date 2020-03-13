import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const Dash = () => {
    const [state, setState] = useState([])
    const [deleteState, setDeleteState] = useState(false)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1")
            .then(response => setState(response.data))
            .catch(error => console.log(error))
    }, [deleteState])

    const onDeleteHandler = (item, e) => {
        axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
            .then(response => setDeleteState(!deleteState))
            .catch(error => console.log(error))
    }
    const onEditHandler = (item, e) => {
        navigate(`/edit/${item._id}`)
    }
    const goToColumn = (item, e, column) => {
        item.category = column
        console.log(item)
        axios.put(`http://localhost:8000/api/v1/edit/${item._id}`,item)
        .then(response => setDeleteState(!deleteState))
        .catch(error => console.log(error))
    }
    const onReviewHandler = (item, e) =>{
        navigate(`reviews/${item._id}`)
    }

    return (
        <div>
            <Link to="/new">Add a new task</Link>
            <p>Welcome</p>

            <table style={{display:'inline-block',verticalAlign:'top',width:'450px'}}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index) =>
                        item.category === 1 ? (
                            <tr key={index}>
                                <td><Link to={`/show/${item._id}`}>{item.task}</Link></td>

                                <td style={{color: new Date(item.due).getTime() - new Date().getTime() <  0 ? 'red' : 'black'}}>{new Date(item.due).toISOString().substring(0,10)}</td>
                                <td>{item.category}</td>
                                <td><button onClick={(e) => onEditHandler(item, e)}>Edit</button></td>
                                <td><button onClick={(e) => onDeleteHandler(item, e)}>Delete</button></td>
                                <td><button onClick={(e) => goToColumn(item, e,2)}>Move to Two</button></td>
                                <td><button onClick={(e) => goToColumn(item, e,3)}>Move to Three</button></td>
                                <td><button onClick={(e) => onReviewHandler(item, e)}>Reviews</button></td>

                            </tr>
                        ) : null)}
                </tbody>
            </table>
            <table style={{display:'inline-block',verticalAlign:'top',width:'450px'}}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index) =>
                        item.category === 2 ? (
                            <tr key={index}>
                                <td><Link to={`/show/${item._id}`}>{item.task}</Link></td>
                                <td style={{color: new Date(item.due).getTime() - new Date().getTime() <  0 ? 'red' : 'black'}}>{new Date(item.due).toISOString().substring(0,10)}</td>
                                <td>{item.category}</td>
                                <td><button onClick={(e) => onEditHandler(item, e)}>Edit</button></td>
                                <td><button onClick={(e) => onDeleteHandler(item, e)}>Delete</button></td>
                                <td><button onClick={(e) => goToColumn(item, e,1)}>Move to One</button></td>
                                <td><button onClick={(e) => goToColumn(item, e,3)}>Move to Three</button></td>
                                <td><button onClick={(e) => onReviewHandler(item, e)}>Reviews</button></td>

                            </tr>
                        ) : null)}

                </tbody>
            </table>
            <table style={{display:'inline-block',verticalAlign:'top',width:'450px'}}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index) =>
                        item.category === 3 ? (
                            <tr key={index}>
                                <td><Link to={`/show/${item._id}`}>{item.task}</Link></td>
                                <td style={{color: new Date(item.due).getTime() - new Date().getTime() <  0 ? 'red' : 'black'}}>{new Date(item.due).toISOString().substring(0,10)}</td>
                                <td>{item.category}</td>
                                <td><button onClick={(e) => onEditHandler(item, e)}>Edit</button></td>
                                <td><button onClick={(e) => onDeleteHandler(item, e)}>Delete</button></td>
                                <td><button onClick={(e) => goToColumn(item, e,1)}>Move to One</button></td>
                                <td><button onClick={(e) => goToColumn(item, e,2)}>Move to Two</button></td>
                                <td><button onClick={(e) => onReviewHandler(item, e)}>Reviews</button></td>

                            </tr>
                        ) : null)}
                </tbody>
            </table>
        </div>
    )
}

export default Dash
