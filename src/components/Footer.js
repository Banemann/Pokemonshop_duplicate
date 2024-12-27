import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-logo2">
  <img src="/logo.svg" alt="Pokémon Shop Logo" width="231" height="78" />
</div>
<div className="footer-section">
        <h3>Kontakt:</h3>
        <p>Pokémonshop</p>
        <p>Jernbane Alle 77, st. tv.</p>
        <p>2720 Vanløse Danmark</p>
        <p>CVR-nummer: 40389121</p>
        <p>Telefonr.: 23105382</p>
        <p>
          E-mail: <a href="mailto:LSJ@pokemonshop.dk">LSJ@pokemonshop.dk</a>
        </p>
        
        <div className="social-icons">
  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pokemonshopdk" aria-label="Facebook">
    <img src="/facebook.svg" alt="Facebook logo" width="32" height="32" />
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pokemonshopdk" aria-label="Instagram">
    <img src="/instagram.svg" alt="Instagram logo" width="32" height="32" />
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pokemonshopdk" aria-label="TikTok">
    <img src="/tiktok.svg" alt="TikTok logo" width="32" height="32" />
  </a>
</div>

      </div>

      <div className='dropdownh3 mtop'>
      <h3>Kundeservice</h3>
      </div>

      <div className="footer-section footerdropdown">
      <h3>Kundeservice:</h3>
        <ul>
          <li><a href="/omos">Åbningstider</a></li>
          <li><a href="/omos">Om Pokémon Shop</a></li>
          <li><a href="/omos">Handelsbetingelser</a></li>
          <li><a href="/omos">Kontakt</a></li>
        </ul>
      </div>

      <div className='dropdownh3 mbot'>
      <h3>Nyhedsbrev</h3>
      </div>

      <div className="footer-section footerdropdown">
      <h3>Nyhedsbrev:</h3>
        <p className='nyhedsbrevp'>
          Vær en af de første til at holde sig opdateret med Pokémon Shops
          eksklusive tilbud og nye produkter, tilmeld dig nyhedsbrevet i dag.
        </p>
        <form>
          <input type="email" placeholder="E-mail..." />
          <button type="submit">Tilmeld</button>
        </form>
      </div>

      <div className="social-icons2">
  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pokemonshopdk" aria-label="Facebook">
    <img src="/facebook.svg" alt="Facebook logo" width="32" height="32" />
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pokemonshopdk" aria-label="Instagram">
    <img src="/instagram.svg" alt="Instagram logo" width="32" height="32" />
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pokemonshopdk" aria-label="TikTok">
    <img src="/tiktok.svg" alt="TikTok logo" width="32" height="32" />
  </a>
</div>

      <div className="footer-logo">
  <img src="/logo.svg" alt="Pokémon Shop Logo" width="231" height="78" />
</div>

<div>
  <p className="footer-text-mobil">
  © Emil Erdem & Casper Baneman 
  </p>
</div>
    </footer>
  );
}

export default Footer;
