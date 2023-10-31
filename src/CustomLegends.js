import React from "react";

function CustomLegends ({ legends, handleLegendDelete }){
    
    const mappedLegends = legends.map((legend) => {
         return <div key={legend.id} onClick={handleLegendDelete}>
            {legend.id}
         </div> 
    })
    return (
        <div className="legends">
            <h1 className="legendsHeader">Stored Custom Legends:</h1>
            <div>{mappedLegends}</div>
        </div>
    )
}

export default CustomLegends