import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="Tutorial">
            <p>Welcome to {props.tutorialName} by {props.userName}</p>
            <p>In this {props.tutorialName} tutorial, we are going to learn about components</p>
        </div>
)};

export default userOutput;
