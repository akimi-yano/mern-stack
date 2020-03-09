import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Router, Link} from '@reach/router'

const Dash = () => {
    
    const [state, setState] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:8000/api/v1')
        .then(response=>{
            console.log(response)
            return setState(response.data)
        })
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h1>Product Manager</h1>
            <Link to="/new">Add a new one !</Link>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dash

