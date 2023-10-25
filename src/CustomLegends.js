import React from "react";

function CustomLegends ({ legends, handleLegendDelete }){
    
    const mappedLegends = legends.map((legend) => {
         return <div key={legend.id} onClick={handleLegendDelete}>
            {legend.id}
         </div> 
    })
    return (
        <div>{mappedLegends}</div>
    )
}

export default CustomLegends