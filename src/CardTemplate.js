

function CardTemplate () {
return (
    <div className="card-container">
    <div className="card-background">
    <div className="card-frame">
      <div className="frame-header">
        <h2 className="name">Oath of Nissa</h2>
        <i className="ms ms-g" id="mana-icon"></i>
      </div>
      <img className="frame-art" src="https://image.ibb.co/fqdLEn/nissa.jpg" alt="nissa art"/>
      <div className="frame-type-line">
        <h1 className="type">Legendary Enchantment</h1>
        <img src="https://image.ibb.co/kzaLjn/OGW_R.png" id="set-icon" alt="OGW-icon"/>
      </div>
      <div className="frame-text-box">
        <p className="description ftb-inner-margin">When Oath of Nissa enters the battlefield, look at the top three cards of your library. You may reveal a creature, land, or planeswalker card from among them and put it into your hand. Put the rest on the bottom of your library in any order.
        </p>
        <p className="description">
          You may spend mana as though it were mana of any color to cast planeswalker spells.
        </p>
        <p className="flavour-text">"For the life of every plane, I will keep watch."
        </p>
      </div>

      <div className="frame-bottom-info inner-margin">
        <div className="fbi-left">
          <p>140/184 R</p>
        <p><img className="paintbrush" src="https://image.ibb.co/e2VxAS/paintbrush_white.png" alt="paintbrush icon"/> Wesley Burt</p> 
        </div>

        <div className="fbi-center"></div>

        <div className="fbi-right">
          &#x99; &amp; &#169; 2016 Wizards of the Coast
        </div>
      </div>

    </div>

  </div>

</div>
)}

export default CardTemplate