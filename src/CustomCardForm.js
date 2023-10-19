import React, { useState } from "react";

function CustomCardForm ({ handleNameChange, handleTypeChange, handleTextChange, handleTextChange2, handleFlavorChange, handleCostChange }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted", e)
    }
    const [formData, setFormData] = useState({
        legendName: "",
        legendType: "",
        legendText: {
            descrip1: "",
            descrip2: ""
        },
        flavor: ""
    })

    return (
    <form onSubmit = {handleSubmit}>
        <div>
            <p>Custom Card</p>
        </div>
        <div>
            Legend's Name: <input type = "text" onChange = {handleNameChange}></input>
            Legend's Cost: <input type = "text" onChange = {handleCostChange}></input>
            Legend's Type: <input type = "text" onChange = {handleTypeChange}></input>
        </div>
        <div>
            Legend's Card Text: 
            <div>
                Keywords/First Ability: <input type = "textarea" onChange = {handleTextChange}></input>
                Second Ability: <input type = "text" onChange = {handleTextChange2}></input>
            </div>
        </div>
        <div>
            Legend's Flavor: <input type = "text" onChange = {handleFlavorChange}></input>
            <input type="submit"></input>
        </div>
    </form>
    )
}

export default CustomCardForm