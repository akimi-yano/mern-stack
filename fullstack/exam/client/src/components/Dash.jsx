import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from "@reach/router"

const Dash = () => {

    const [state, setState]=useState([])
    const [deleteState, setDeleteState]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/v1")
            .then(response=>setState(response.data))
            .catch(error=>console.log(error))            
    },[deleteState])

    const onDeleteHandler=(item, e)=>{
        axios.delete(`http://localhost:8000/api/v1/delete/${item._id}`)
            .then(response=>setDeleteState(!deleteState))
            .catch(error=>console.log(error))
    }

    const  goToColumn = (item, e, column)=>{
        item.category = column
        axios.put(`http://localhost:8000/api/v1/edit/${item._id}`,item)
            .then(response=>setDeleteState(!deleteState))
            .catch(error=>console.log(error))
    }
    const AddHandler =() =>{
        navigate("/new")
    }



    return (
        <div>
            <button style={{display:"block", marginLeft: "1000px", marginBottom: "25px"}} className="btn btn-info" onClick={AddHandler}>＋　Add New Project </button>
            <table className="border border-secondary" style={{display:'inline-block',verticalAlign:'top',width:'350px', padding: "auto", borderColor: "RGB(224,224,224)", margin:"0px 5px"}}>
                <thead className="border border-secondary">
                    <tr>
                        <th className="border border-secondary" style={{backgroundColor:"lightblue", width: "350px"}}><h2>Bocklog</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index)=>
                    item.category===1?(
                    <tr key={index} className="border border-secondary">
                        <div className="border border-secondary" style={{width: "300px", margin: "10px auto", padding:"5px"}} >
                        <td style={{display:"block"}}><h4>{item.project}</h4></td>
                        <td style={{display:"block"}}><p style={{display:"inline-block"}}>Due: </p><p style={{display:"inline-block", color: new Date(item.due).getTime() - new Date().getTime() <  0 ? 'red' : 'black'}}>{new Date(item.due).toISOString().substring(0,10)}</p></td>
                        <td style={{display:"block"}}><button className="btn btn-danger" style={{backgroundColor:"pink",borderColor:"pink", color: "black"}} onClick={(e)=> goToColumn(item,e,2)}>Start Project ></button></td>
                    </div>
                    </tr>
                    ):null)}
                </tbody>
            </table>

            <table className="border border-secondary" style={{display:'inline-block',verticalAlign:'top',width:'350px', padding: "auto", borderColor: "RGB(224,224,224)", margin:"0px 5px"}}>
                <thead className="border border-secondary" style={{backgroundColor:"pink", width: "350px"}}>
                    <tr>
                        <th  className="border border-secondary" style={{backgroundColor:"pink", width: "350px"}}><h2>In Progress</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index)=>
                    item.category===2?(
                    <tr key={index} className="border border-secondary" style={{padding: "auto"}}>
                        <div className="border border-secondary" style={{width: "300px", margin: "10px auto", padding:"5px"}} >
                        <td style={{display:"block"}}><h4>{item.project}</h4></td>
                        <td style={{display:"block"}}><p style={{display:"inline-block"}}>Due: </p><p style={{display:"inline-block", color: new Date(item.due).getTime() - new Date().getTime() <  0 ? 'red' : 'black'}}>{new Date(item.due).toISOString().substring(0,10)}</p></td>
                        <td style={{display:"block"}}><button className="btn btn-danger" style={{backgroundColor:"lightgreen",borderColor:"lightgreen", color: "black"}} onClick={(e)=> goToColumn(item,e,3)}>Move to Completed ></button></td>
                        </div>
                    </tr>
                    ):null)}
                </tbody>
            </table>

            <table className="border border-secondary" style={{display:'inline-block',verticalAlign:'top',width:'350px', padding: "auto", borderColor: "RGB(224,224,224)", margin:"0px 5px"}}>
                <thead className="border border-secondary">
                    <tr >
                        <th className="border border-secondary" style={{backgroundColor:"lightgreen", width: "350px"}}><h2>Completed</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, index)=>
                    item.category===3?(
                    <tr key={index} className="border border-secondary">
                        <div className="border border-secondary" style={{width: "300px", margin: "10px auto", padding:"5px"}} >
                        <td style={{display:"block"}}><h4>{item.project}</h4></td>
                        <td style={{display:"block"}}><p style={{display:"inline-block"}} >Due: </p><p style={{display:"inline-block", color: new Date(item.due).getTime() - new Date().getTime() <  0 ? 'red' : 'black'}}>{new Date(item.due).toISOString().substring(0,10)}</p></td>
                        <td style={{display:"block"}}><button className="btn btn-danger" style={{backgroundColor:"red",borderColor:"red", color: "black"}} onClick={(e)=> onDeleteHandler(item, e)}>× Remove Project</button></td>
                        </div>
                    </tr>
                    ):null)}
                </tbody>
            </table>

        
        {/* <Link style={{backgroundColor: "RGB(102,178,255)"}} to="/new">Add New Project</Link> */}
        </div>
    )
}

export default Dash
