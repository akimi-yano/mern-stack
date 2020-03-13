import React,{useEffect, useState} from 'react'
import  axios from 'axios'
import {Link} from '@reach/router'

const Reviews = (props) => {
    const [formState, setFormState] = useState({
        comment:"",
        rating:1,
    })
    const [state, setState]=useState({
        task:"",
        description:"",
        due:"",
        category:"1",
        reviews: []
    })
    const [updateState, setUpdateState] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/show/${props.id}`)
            .then(response=>setState(response.data))
            .catch(error=>console.log(error))
    },[updateState])

    const onChangeHandler=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    

    const onSubmitHandler=(e, item)=>{
        e.preventDefault();
        const temp = {...state}
        temp.reviews.push(formState)
        axios.put(`http://localhost:8000/api/v1/edit/${state._id}`,temp)
            .then(response=>{
                console.log(response)
                setUpdateState(!updateState);
                setFormState({
                    comment:"",
                    rating:1,
                })
            })
            
            .catch(error=>console.log(error))
    }
    const deleteReview=(index,e, item)=>{
        const temp = {...state}
        console.log(temp.reviews.length)
        temp.reviews = temp.reviews.filter((item,i) => i != index)

        axios.put(`http://localhost:8000/api/v1/edit/${state._id}`,temp)
            .then(response=>{
                console.log(response)
                setUpdateState(!updateState)
            })
            .catch(error=>console.log(error))
    }
    return (
        <div>
               <Link to="/">Home</Link>
            <table>
                <tbody>
                {state.reviews.map((item, index)=>(
            <tr key={index}>
        <td>Rating: {item.rating}</td>
      <td>Comment: {item.comment}</td>
      <td><button onClick={(e)=>deleteReview(index,e, item)}>Delete</button></td>

  </tr>
                ))}
              </tbody>
            </table>
            <form onSubmit={onSubmitHandler}>
                <p>Comment: </p>
                <input type="text" name="comment" value={formState.comment} onChange={onChangeHandler} />
                <p>Rating: </p>
                <select name="rating" onChange={onChangeHandler} value={formState.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Reviews
