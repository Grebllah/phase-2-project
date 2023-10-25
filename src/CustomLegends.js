import React from "react";

function CustomLegends ({ legends, handleLegendDelete, handleLegendClick }){
    
    const mappedLegends = legends.map((legend) => {
         return <div key={legend.id}>
            {legend.legendName}
            <button onClick={handleLegendClick}>Load</button>
            <button onClick={handleLegendDelete}>X</button>
         </div> 
    })
    return (
        <div>{mappedLegends}</div>
    )
}

export default CustomLegends