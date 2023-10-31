import React, {useEffect, useState} from 'react';
import './App.css';
import CardTemplate from './CardTemplate'
import CustomCardForm from './CustomCardForm'
import CustomLegends from './CustomLegends';
import NavBar from './NavBar';

function App() {
  const [formData, setFormData] = useState({})
  const [legends, setLegends] = useState([])
  const [fetchReq, setFetchReq] = useState(0)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: `${e.target.value}`
    })
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    const configObj = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "legendName": `${formData.legendName}`,
        "legendCost": `${formData.legendCost}`,
        "legendType": `${formData.legendType}`,
        "legendText": {
          "descrip1": `${formData.legendText1}`,
          "descrip2": `${formData.legendText2}`
        },
        "flavor": `${formData.legendFlavor}`
      })
    }
    fetch('http://localhost:3000/legends', configObj)
      // .then(res => res.json())
      .then(data => {
        // addLegend(data)
        setFetchReq(fetchReq + 1)
      })
  }

  const handleLegendLoad = (e) => {
    console.log(e.target.id)
    const legendID = e.target.id
    fetch (`http://localhost:3000/legends/${legendID}`)
    .then ((res) => res.json())
    .then((data) => setFormData({
      legendName: data.legendName || "",
      legendType: data.legendType || "",
      legendText1: data.legendText?.descrip1 || "",
      legendText2: data.legendText?.descrip2 || "",
      legendFlavor: data.flavor || "",
      legendCost: data.legendCost || "",
    }))
    .then(setFetchReq(fetchReq + 1))
  }
  
  const handleLegendDelete = (e) => {
    const legendID = e.target.id
    fetch (`http://localhost:3000/legends/${legendID}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(setFetchReq(fetchReq + 1))
  }

  useEffect (()=>{
    fetch ("http://localhost:3000/legends")
    .then ((res) => res.json())
    .then ((data)=> {
      setLegends(data)
    })
  }, [fetchReq])

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
          <CustomLegends legends = {legends} handleLegendDelete={handleLegendDelete} handleLegendLoad={handleLegendLoad}></CustomLegends>
        </div>
    </div>
  );
}

export default App;
