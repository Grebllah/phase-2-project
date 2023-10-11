import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterOptions from './CharacterOptions'
import Chosen from './Chosen'

function App() {
  const [characterChoice, setCharacterChoice] = useState(null)
  const [characterData, setCharacterData] = useState([])

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <CharacterOptions characterData = {characterData} handleCharChange = {handleCharChange}></CharacterOptions>
          <Chosen characterChoice = {characterChoice}></Chosen>
        </div>
      </header>
    </div>
  );
}

export default App;
