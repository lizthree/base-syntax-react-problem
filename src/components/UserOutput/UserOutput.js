import React from 'react';
import './UserOutput.css';

// props from App.js
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                Username: {props.username}
            </p>
            <p>
                Username prop above if not hardcoded.
            </p>
        </div>
    );
};

export default userOutput;