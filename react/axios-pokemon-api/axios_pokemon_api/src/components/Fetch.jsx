import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetch = (rops) => {
    const [responseData, setResponseData] = useState(null);
    // const [state, setState] = useState({
    //     results: []
    // })

    const onClickHandler = (e) => {
        useEffect(()=>{
            axios.get('"https://pokeapi.co/api/v2/pokemon?limit=807&offset=0"')
                .then(response=>{setResponseData(response.data)})
        }, []); 
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        //     .then(response => {
        //         // json() returns a Promise, so we need to call .then() again
        //         return response.json()
        //     })
        //     .then(responseJson => {
        //     setState(responseJson)
        // }).catch(err=>{
        //     console.log(err);
        // })
    }
    return (
        <div>
            <button onClick={onClickHandler}>Fetch Pokemon</button>
            <ul>
            {responseData.results.map((item,i)=> (<li key={i}>{item.name}</li>)
            )}
            {/* {state.results.map((item,i)=> (<li key={i}>{item.name}</li>)
            )} */}
            </ul>
        </div>
    )
}

export default Fetch
