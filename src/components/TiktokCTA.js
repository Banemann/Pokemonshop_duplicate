import React from 'react';
import '../styles/TiktokCTA.css';

function TiktokCTA() {
  return ( 
  <div className="ctadiv">
    <div className="cta">
    <img className='maskot1' src="maskot.svg" alt="Pokemonshop Maskot" width="359.17" height="490.87" />
      <div className="ctatext">
        <h2>Hold dig opdateret med Pokémon Shop</h2>
        <p>
          Følg med i pack openings, ugens bedste pull og meget mere direkte på TikTok! Bliv en del af et samle-glad fællesskab af Pokémon-enthusiaster! Eller besøg Pokémon Shops fysiske butik på adressen:
          <a
            href="https://www.google.com/maps/search/?api=1&query=Jernbane+Allé+77,+st.+tv,+2720+Vanløse"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            <strong> Jernbane Allé 77, st. tv, 2720 Vanløse</strong>
          </a>
        </p>
        <a
          className="tiktokbtn"
          href="https://www.tiktok.com/@pokemonshopdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Besøg TikTok
          <img src="tiktoklogo.svg" alt="TikTok Logo" width="27" height="27" />
        </a>
      </div>
      <img className="maskot2" src="maskot.svg" alt="Pokemonshop Maskot" width="359.17" height="490.87" />
    </div>
  </div>
  );
}

export default TiktokCTA;