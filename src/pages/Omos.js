import React from "react";
import "../styles/Omos.css";
import TiktokCTA from "../components/TiktokCTA";

function Omos() {
  return (
    <div className="omos-page">
      <div className="omherosection">
        <img
          src="pokemonshopstore.png"
          alt="The physical front of the Pokemonshop store"
        />
        <h1 className="omh1">Om Pokémon Shop</h1>
      </div>

      <div className="omvision">
      <iframe className="iframe2"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9JeqjJW7kzA?controls=0&rel=0&modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="omvisiontext">
          <h2 className="omh2">Visionen bag Pokémon Shop</h2>
          <p className="omp">
            Bag Pokémonshop står jeg, en 21-årig passioneret samler, der har
            elsket Pokémon-kort siden barndommen. Idéen til Pokémonshop opstod i
            starten af 2019, da jeg ønskede at gøre det nemmere for både samlere
            og forældre at få fat i de rigtige kort. Visionen har altid været at
            skabe Danmarks bedste Pokémon-webshop.
            <br />
            <br />
            I dag tilbyder vi et omfattende sortiment med flere tusinde
            enkeltkort, booster-pakker fra over 30 serier, eksklusive bokse og
            et væld af tilbehør. Uanset om du er en erfaren samler eller ny i
            Pokémon-verdenen, har vi alt, hvad du behøver.
            <br />
            <br /> <div className="opentiderdiv"> <strong className="opentider"> Åbningstider i butikken: </strong>
            <br />
            Tirsdag kl. 12-17 <br />
            Torsdag kl. 12-17 <br />
            Fredag kl. 12-17 <br />
            Lørdag kl. 10-15</div>
          </p>
        </div>
        <iframe className="iframe1"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9JeqjJW7kzA?controls=0&rel=0&modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <TiktokCTA />
    </div>
  );
}

export default Omos;
