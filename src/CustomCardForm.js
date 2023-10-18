import React from "react";

function CustomCardForm ({ handleNameChange, handleTypeChange, handleTextChange, handleFlavorChange, handleCostChange }) {
    return (
    <div display = "inline">
        <div>
            <p>Custom Card</p>
        </div>
        <div>
            Legend's Name: <input type = "text" onChange = {handleNameChange}></input>
            Legend's Cost: <input type = "text" onChange = {handleCostChange}></input>
        </div>
        <div>
            Legend's Type: <input type = "text" onChange = {handleTypeChange}></input>
            Legend's Card Text: <input type = "textarea" onChange = {handleTextChange}></input>
            Legend's Flavor: <input type = "text" onChange = {handleFlavorChange}></input>
        </div>
    </div>
    )
}

export default CustomCardForm