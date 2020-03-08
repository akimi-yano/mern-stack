import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from '@reach/router';

const Details = (props) => {
    const [state, setState] = useState({
        name:"",
        age:0
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response => setState(response.data))
            .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h1>{state.name}</h1>
            <p>Age: {state.age}</p>
            <Link to="/">Go Back</Link>

        </div>
    )
}

export default Details
