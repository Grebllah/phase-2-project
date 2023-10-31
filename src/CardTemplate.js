

function CardTemplate ({ legendName, legendType, legendText1, legendText2, legendFlavor, legendCost }) {
return (
    <div className="App">
      <div className="card-container">
        <div className="card-background">
          <div className="card-frame">
            <div className="frame-header">
              <h2 className="name">{legendName}</h2>
              <h2 className="cost">{legendCost}</h2>
            </div>
          <img className="frame-art" src="https://i.etsystatic.com/35291969/r/il/a00305/3919044989/il_fullxfull.3919044989_pz6j.jpg" alt="nissa art"/>
          <div className="frame-type-line">
            <h1 className="type">Legendary {legendType}</h1>
            <img src="https://image.ibb.co/kzaLjn/OGW_R.png" id="set-icon" alt="OGW-icon"/>
          </div>
          <div className="frame-text-box">
            <p className="description ftb-inner-margin">{legendText1}</p>
            <p className="description">{legendText2}</p>
            <p className="flavour-text">{legendFlavor}</p>
          </div>
          <div className="frame-bottom-info inner-margin">
            <div className="fbi-left">
              <p>000/000 C</p>
              <p>
                <img className="paintbrush" src="https://image.ibb.co/e2VxAS/paintbrush_white.png" alt="paintbrush icon"/> Wesley Burt
              </p> 
            </div>
            <div className="fbi-center"></div>
            <div className="fbi-right">
              &#x99; &amp; &#169; 2016 Wizards of the Coast
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default CardTemplate