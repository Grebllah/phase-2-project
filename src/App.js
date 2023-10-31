import React, {useEffect, useState} from 'react';
import './App.css';
import CardTemplate from './CardTemplate'
import CustomCardForm from './CustomCardForm'
import CustomLegends from './CustomLegends';
import NavBar from './NavBar';

function App() {
  const [formData, setFormData] = useState({})
  const [legends, setLegends] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id]: `${e.target.value}`
    })
  }

  const addLegend = (legend)=>{
    setLegends([...legends, legend])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const configObj = {
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
            "flavor": `${formData.legendFlavor}`
      })
    }
    fetch('http://localhost:3000/legends', configObj)
      .then(res => res.json())
      .then(data => {
        addLegend(data)
      })
  }

  const handleLegendDelete = (e) => {
    console.dir(e.target)
  }

  useEffect (()=>{
    fetch ("http://localhost:3000/legends")
    .then ((res) => res.json())
    .then ((data)=> {
      setLegends(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <h1 className="pageDescrip">Magic: The Gathering Lore and Custom Legend Creation App</h1>
        <div>
          <CustomCardForm 
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
          ></CustomCardForm>
          <CardTemplate
            legendName = {formData.legendName}
            legendType = {formData.legendType}
            legendText1 = {formData.legendText1}
            legendText2 = {formData.legendText2}
            legendFlavor = {formData.legendFlavor}
            legendCost = {formData.legendCost}
          ></CardTemplate>
          <CustomLegends legends = {legends} handleLegendDelete={handleLegendDelete}></CustomLegends>
        </div>
    </div>
  );
}

export default App;
