import React, {useState} from 'react'

const Fetch = () => {
    const [state, setState] = useState({
        results: []
    })
    const onClickHandler = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                // json() returns a Promise, so we need to call .then() again
                return response.json()
            })
            .then(responseJson => {
            setState(responseJson)
        }).catch(err=>{
            console.log(err);
        })}
    return (
        <div>
            <button onClick={onClickHandler}>Fetch Pokemon</button>
            <ul>
            {state.results.map((item,i)=> (<li key={i}>{item.name}</li>)
            )}
            </ul>
        </div>
    )
}

export default Fetch
