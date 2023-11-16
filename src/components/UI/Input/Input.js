import React from "react";


import './Input.css'


const Input = (props) => {
    let inputElement = null

    switch (props.inputtype) {
        case 'input':
            inputElement = <input className="input-element" {...props} />
            break
        default:
            inputElement = <input className="input-element" {...props} />
    }

    return (
        <div className="input">{inputElement}</div>
    )
}



export default Input
