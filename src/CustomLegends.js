import React from "react";

function CustomLegends ({ legends, handleLegendDelete, handleLegendLoad }){
    
    const mappedLegends = legends.map((legend) => {
         return <div key={legend.id} id={legend.id}>
            <button key={legend.id} id={legend.id} onClick={handleLegendLoad}>{legend.legendName}</button>
            <button id={legend.id}  onClick={handleLegendDelete}>X</button>

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