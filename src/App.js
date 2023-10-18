import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterOptions from './CharacterOptions'
import Chosen from './Chosen'
import CardTemplate from './CardTemplate'

function App() {
  const [characterChoice, setCharacterChoice] = useState(null)
  const [characterData, setCharacterData] = useState([])
  const [characterLore, setCharacterLore] = useState([])
  const excludedTerms = ["Will", "Abian", "Dungeon", "Master", "Duck", "Ersta", "Grist", "Oko"]

  const handleCharChange = (e) => {
    setCharacterChoice(e.target.value)
  }

  useEffect (()=>{
    fetch ("https://api.scryfall.com/catalog/planeswalker-types")
    .then ((res) => res.json())
    .then ((data)=> {
      setCharacterData(data.data)
    })
  }, [])

  useEffect (()=>{
    fetch ("https://api.scryfall.com/catalog/planeswalker-types")
    .then ((res) => res.json())
    .then ((data)=> {
      setCharacterData(data.data)
    })
  }, [])

  useEffect (()=>{
    if (!characterChoice) return
    const URI = encodeURIComponent(`lore:${characterChoice}`)
    fetch (`https://api.scryfall.com/cards/search?q=${URI}`)
    // fetch(`https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3`)
    .then ((res) => res.json())
    .then ((data)=> {
      setCharacterLore(data.data)
    })
  }, [characterChoice])
  
  console.log(characterLore)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="App-title">Magic: The Gathering Lore App</h1>
        <div>
          <CharacterOptions excludedTerms = {excludedTerms} characterData = {characterData} handleCharChange = {handleCharChange}></CharacterOptions>
          <Chosen characterLore = {characterLore} characterChoice = {characterChoice}></Chosen>
          <CardTemplate></CardTemplate>
        </div>
      </header>
    </div>
  );
}

export default App;
