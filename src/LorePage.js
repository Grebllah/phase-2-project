import { useState, useEffect } from "react"
import CharacterOptions from "./CharacterOptions"
import Chosen from "./Chosen"
import NavBar from "./NavBar"

function LorePage(){
    const [characterChoice, setCharacterChoice] = useState(null)
    const [characterLore, setCharacterLore] = useState([])
    const [characterData, setCharacterData] = useState([])
    const excludedTerms = ["Will", "Abian", "Dungeon", "Master", "Duck", "Ersta", "Grist", "Oko"]

    const handleCharChange = (e) => {
        setCharacterChoice(e.target.value)
    }

    useEffect (()=>{
        if (!characterChoice) return
        const URI = encodeURIComponent(`lore:${characterChoice}`)
        console.log("fetch")
        fetch (`https://api.scryfall.com/cards/search?q=${URI}`)
        .then ((res) => res.json())
        .then ((data)=> {
          setCharacterLore(data.data)
        })
      }, [characterChoice])

    useEffect (()=>{
        fetch ("https://api.scryfall.com/catalog/planeswalker-types")
        .then ((res) => res.json())
        .then ((data)=> {
          setCharacterData(data.data)
        })
      }, [])
    return ( 
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <CharacterOptions 
            excludedTerms = {excludedTerms}
            characterData = {characterData}
            handleCharChange = {handleCharChange}
            ></CharacterOptions>
            <Chosen characterLore = {characterLore} characterChoice = {characterChoice}></Chosen>

        </div>
    )
}

export default LorePage