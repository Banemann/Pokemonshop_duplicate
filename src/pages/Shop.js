import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import supabase from "../supabase";
import "../styles/Shop.css";
import { useLocation, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterByType, setFilterByType] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [inStock, setInStock] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from("pokemonshop").select("*");

        if (error) {
          throw error;
        }

        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  const collectionQuery = searchParams.get("collection") || "";
  const typeQuery = searchParams.get("type") || "";

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(location.search);
    params.set("search", searchInput);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const filteredProducts = products.filter((product) => {
    if (filterByType.length > 0 && !filterByType.includes(product.type)) {
      return false;
    }

    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    if (inStock && !product.lager) {
      return false;
    }

    if (searchQuery && !product.cardname.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    if (collectionQuery && product.collection !== collectionQuery) {
      return false;
    }

    if (typeQuery && product.type !== typeQuery) {
      return false;
    }

    return true;
  });

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const collectionName = location.state?.collectionName || "Alle Pokémon Serier";

  return (
  <div className="shoppagediv">
    <h1>{collectionName}</h1>
    <div className="shoppage">
    <button
          className="filter-toggle-button"
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          {isFilterOpen ? "X" : "Sorter og filtrer"}
        </button>

      <div className={`filter-panel ${isFilterOpen ? "open" : "closed"}`}>
        <h3>Tilgængelighed</h3>
        <div className="lagerlabel">
          <label>
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            På lager
          </label>
        </div>
        <hr />
        <h3>Type</h3>
        <div className="type-filters">
          {[
            "Single kort",
            "Booster pakker",
            "Booster bokse",
            "Blister pakker",
            "Build & battle",
            "ETB",
            "Tins",
          ].map((type) => (
            <div key={type}>
              <label>
                <input className="type-checkbox"
                  type="checkbox"
                  checked={filterByType.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilterByType([...filterByType, type]);
                    } else {
                      setFilterByType(filterByType.filter((t) => t !== type));
                    }
                  }}
                />
                {type}
              </label>
            </div>
          ))}
        </div>

        <hr />
        <form className="filter-search-bar" onSubmit={handleSearchSubmit}>
          <button type="submit" className="filter-search-button">
          <img src="/searchicon.png" alt="Search" height="19" width="19" />
          </button>
          <input
            type="text"
            placeholder="Søg..."
            value={searchInput}
            onChange={handleSearchChange}
          />
        </form>

        <hr />
        <h3>Pris</h3>
        <div className="price-slider">
          <div className="price-inputs">
            <input
              type="number"
              min="0"
              max="5000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="price-box"
            />
            <span>–</span>
            <input
              type="number"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="price-box"
            />
          </div>
          <div className="slider-wrapper">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="slider"
            />
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="slider"
            />
          </div>
        </div>
      </div>

      <div className="product-list">
          {filteredProducts.map((product) => (
            <LazyLoad
              key={product.id}
              height={483}
              offset={100}
              placeholder={<p>Loading...</p>}
            >
              <ProductCard
                product={{
                  id: product.id,
                  cardname: product.cardname,
                  price: product.price,
                  image: product.image_url,
                  collection: product.collection,
                  grade: product.grade,
                  kortbeskrivelse: product.kortbeskrivelse,
                  beskrivelse: product.beskrivelse,
                  type: product.type,
                  lager: product.lager,
                }}
              />
            </LazyLoad>
          ))}
        </div>
    </div>
    </div>
  );
};

export default Shop;
