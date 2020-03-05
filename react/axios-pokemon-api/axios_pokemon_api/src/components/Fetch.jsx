import React, { useState } from 'react';
import axios from 'axios';

const Fetch = (rops) => {
    const [responseData, setResponseData] = useState({
        results: []
    });


    const onClickHandler = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response=>{setResponseData(response.data)})
    }
    return (
        <div>
            <button onClick={onClickHandler}>Fetch Pokemon</button>
            <ul>
            {responseData.results.map((item,i)=> (<li key={i}>{item.name}</li>)
            )}

            </ul>
        </div>
    )
}

export default Fetch
