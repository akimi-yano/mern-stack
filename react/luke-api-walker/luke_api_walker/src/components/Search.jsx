import React, { useState } from 'react'
import { useNavigate, LocationProvider } from '@reach/router';

const Search = (props) => {
    return (
        <div>
            <form onSubmit={(e) => props.onSubmitHandler(e)}>
                <select name="searchParam" onChange={props.onChangeHandler}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <input type="text" name="searchId" onChange={props.onChangeHandler} />
                <input type="submit" value="Search" />
            </form>
            
        </div>
    )
}

export default Search
