import React from 'react';
// create the component (extend with React [only extend it if it has diff state] or create a function [representational only])

const userInput = (props) => {
    const style = {
        margin: '0 0 0 16px',
        border: '2px solid purple'
    }
    return <input type="text" 
                style={style}
                onChange={props.changed} 
                value={props.currentName} />
};

export default userInput;