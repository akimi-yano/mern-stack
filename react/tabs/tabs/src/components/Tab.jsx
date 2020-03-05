import React from 'react';

const Tab = (props) => {
    return(
        <div className="tab">
            <button className={props.buttonStyle} type="submit" onClick={props.handler} >{props.label}</button>
        </div>
    );
}
export default Tab;