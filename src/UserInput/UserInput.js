import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
    <div className="UserInput">
        <h4>UserName</h4>
        <input type="text" onChange={props.changed} value={props.userName}/>
    </div>
)};

export default userInput;