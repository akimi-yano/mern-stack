import React, {useState, useEffect} from 'react'
import {navigate, Link} from "@reach/router"
import axios from 'axios'
import io from 'socket.io-client'

const Dash = () => {
    const [state, setState] = useState([])
    const [deleteState, setDeleteState] =useState(false)

    const [socket]=useState(io(':8000'))

useEffect(()=>{
    axios.get("http://localhost:8000/api/v1")
        .then(response=>setState(response.data))
        .catch(error=>console.log(error))

        socket.on("updatedMessage", (data)=>{
            setState([...data.data])
        })
},[deleteState])

const editHandler = (e, item)=>{
navigate(`/edit/${item._id}`)
}


const deleteHandler = (e, item)=>{
    axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
    .then(response=>{setDeleteState(!deleteState);
        socket.emit("sentMessage", null)
    })
    .catch(error=>console.log(error))
}

    return (
        <div>
        <Link to="/new">Add a new book</Link>

        
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    {state.map((item, index)=>(
            
      
        <tr key={index}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td><button onClick={(e)=>editHandler(e, item)}>Edit</button>|<button onClick={(e)=>deleteHandler(e, item)}>Delete</button></td>
        </tr>
    ))}

    </tbody>
</table>
            
            
        </div>
    )
}

export default Dash
