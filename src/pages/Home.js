import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import "../styles/Home.css";
import CardWheel from "../components/CardWheel";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';  
import TiktokCTA from "../components/TiktokCTA";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [spotProduct, setSpotProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (spotProduct) {
      addToCart({
        ...spotProduct,
        image: spotProduct.image_url,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResult, spotResult] = await Promise.all([
          supabase.from("pokemonshop").select("*"),
          supabase.from("pokemonshop").select("*").eq("type", "spot").single(),
        ]);
  
        if (productsResult.error) throw productsResult.error;
        if (spotResult.error) throw spotResult.error;
  
        setProducts(productsResult.data);
        setSpotProduct(spotResult.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="homediv">
      <div className="homenyheder">
        <div className="nyhedertext">
          <h1>Populære Nyheder</h1>
          <p>
            En elektrisk bølge er på vej med
            <strong> Scarlet and Violet Surging Sparks</strong>, oplev også den nye
            <strong> Pokémon julekalender</strong>.
          </p>
        </div>
        <div className="nyhederimagediv">
        <img src="info1.webp" alt="nyhed1" width="567" height="633.64" />
        <img src="info2.webp" alt="nyhed2" width="567" height="633.64" />
        </div>
      </div>

      <div className="homeanbefalet">
        <div className="anbefalettext">
          <h2>Pokémon Shops mest anbefalede køb</h2>
          <p>
            Find et bredt udvalg af <strong> populære Pokémon produkter</strong> hos Pokémon Shop, så du kan udvikle din samling.
          </p>
        </div>

        <div className="cardwheel">
          <CardWheel products={products} />
        </div>
      </div>

      {spotProduct && (
  <div className="spotproductdiv">
   
    <div className="spotproduct">
      <Link to={`/shop/${spotProduct.id}`}> 
      <div className="spotproductimage">
        <img src={spotProduct.image_url} alt={spotProduct.cardname} height="411" width="624"/>
      </div>
      </Link>
      <div className="spotproducttext">
        <h2>{spotProduct.cardname}</h2>
        <p><strong>Forudbestil: 22/11/24</strong></p>
        <p className="spotkortp">{spotProduct.kortbeskrivelse}</p>
        <p className="spotproductprice">{`${spotProduct.price.toFixed(0)} kr.`}</p>
        <button
          className="add-to-bag-btn-spotproduct"
          onClick={handleAddToCart}
          disabled={spotProduct.lager <= 0}
        >
          Tilføj til kurv
        </button>
      </div>
    </div>
    
  </div>
)}

<TiktokCTA/>

    </div>
  );
};

export default Home;
