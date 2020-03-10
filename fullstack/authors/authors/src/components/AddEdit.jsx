import React, {useEffect, useState} from 'react'
import {Link, navigate} from '@reach/router';
import A
import Axios from 'axios';

const AddEdit = (props) => {
    const [state, setState] = useState({

    })
    const [formState, setFormState] = useFormState({

    })
    const onChangeHandler{

    }



    if (props.uri includes 'new'){
        const onSubmitHandler
    }
    else{
        useEffect(() => {
        Axios.put(`localhoat:8000/${state.id}`)
            .then(response => response.json.data)
            .catch(error=> console.log(error))
        }, [])
        const onSubmitHandler{

        }
    }
    return (
        <div>
            (props.uri includes 'new')? <h2>Add a new author: </h2> : <h2>Edit this author: </h2>
            <form>
                <p>name: </p>
                <input/>
                <Link>Cancel</Link> <button>Submit</button>
            </form>
            
        </div>
    )
}

export default Add
