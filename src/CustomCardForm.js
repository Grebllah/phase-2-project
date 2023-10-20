import React from "react";

function CustomCardForm ({ handleChange, handleSubmit }) {

    return (
    <form onSubmit = {handleSubmit}>
        <div>
            <p>Custom Card</p>
        </div>
        <div>
            Legend's Name: <input id = "legendName" type = "text" onChange = {handleChange}></input>
            Legend's Cost: <input id = "legendCost" type = "text" onChange = {handleChange}></input>
            Legend's Type: <input id = "legendType" type = "text" onChange = {handleChange}></input>
        </div>
        <div>
            Legend's Card Text: 
            <div>
                Keywords/First Ability: <input id = "legendText1" type = "textarea" onChange = {handleChange}></input>
                Second Ability: <input id = "legendText2" type = "text" onChange = {handleChange}></input>
            </div>
        </div>
        <div>
            Legend's Flavor: <input id = "legendFlavor" type = "text" onChange = {handleChange}></input>
            <input type="submit"></input>
        </div>
    </form>
    )
}

export default CustomCardForm