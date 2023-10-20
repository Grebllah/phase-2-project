import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterOptions from './CharacterOptions'
import Chosen from './Chosen'
import CardTemplate from './CardTemplate'
import CustomCardForm from './CustomCardForm'

function App() {
  const [characterChoice, setCharacterChoice] = useState(null)
  const [characterData, setCharacterData] = useState([])
  const [characterLore, setCharacterLore] = useState([])
  const [formData, setFormData] = useState({})
  const [legends, setLegends] = useState({})
  const excludedTerms = ["Will", "Abian", "Dungeon", "Master", "Duck", "Ersta", "Grist", "Oko"]

  const handleCharChange = (e) => {
    setCharacterChoice(e.target.value)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/legends", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "legendName": `${formData.legendName}`,
            "legendType": `${formData.legendType}`,
            "legendText": {
                "descrip1": `${formData.legendText1}`,
                "descrip2": `${formData.legendText2}`
            },
            "flavor": `${formData.flavor}`
      })
    })
  }

  useEffect (()=>{
    fetch ("https://api.scryfall.com/catalog/planeswalker-types")
    .then ((res) => res.json())
    .then ((data)=> {
      setCharacterData(data.data)
    })
  }, [])

  useEffect (()=>{
    fetch ("http://localhost:3000/legends")
    .then ((res) => res.json())
    .then ((data)=> {
      setLegends(data)
    })
  }, [])

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

  console.log(legends)

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.pinimg.com/originals/4f/26/a8/4f26a8e799691ee30f46559dde3eb3b8.png"
          className="App-logo"
          alt="logo"
        />
        <h1 className="App-title">Magic: The Gathering Lore App</h1>
        <div>
          <CharacterOptions 
            excludedTerms = {excludedTerms}
            characterData = {characterData}
            handleCharChange = {handleCharChange}
          ></CharacterOptions>
          <Chosen characterLore = {characterLore} characterChoice = {characterChoice}></Chosen>
          <CardTemplate
            legendName = {formData.legendName}
            legendType = {formData.legendType}
            legendText1 = {formData.legendText1}
            legendText2 = {formData.legendText2}
            legendFlavor = {formData.legendFlavor}
            legendCost = {formData.legendCost}
          ></CardTemplate>
          <CustomCardForm 
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
          ></CustomCardForm>
        </div>
      </header>
    </div>
  );
}

export default App;
