import React from "react";

function Chosen ({ characterChoice, characterLore }) {
    const mappedArt = characterLore.map((card, i) => {
        if(card.card_faces) return <div key={i}>
            <img src={card.card_faces[0].image_uris.normal} alt="card art"/>
            <img src={card.card_faces[1].image_uris.normal} alt="card art"/>
        </div>
        else return <img  key={i} src={card.image_uris.normal} alt={card.name}/>
    })
    return  (
        <div>
            <div id = "chosen">
            </div>
            <div> {mappedArt}
            </div>
        </div>
    )
}
export default Chosen;