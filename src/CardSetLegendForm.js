import { useState } from "react"


function CardSetLegendForm () {
    const [cardSet, setCardSet] = useState("")
    const [legendType, setLegendType] = useState("")
    return (
        <div>
            <form>
                <select value="artifact">Artifacts</select>
                <select value="enchantment">Enchantments</select>
                <select value="creature">Creatures</select>
                <select value="land">Lands</select>
            </form>
        </div>
    )
}