import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import "../styles/Nyheder.css";

const Nyheder = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase.from("pokemonshop").select("*");

        if (error) throw error;

        setNews(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="nyheder-page">
      <h1>Nyheder</h1>
      <div className="news-list">
        {news.map((item) => (
          <LazyLoad key={item.id} height={124} offset={100} once><Link to={`/shop/${item.id}`} className="">
          <div className="news-item">
            <h2>{item.cardname}</h2>
            <p>{item.kortbeskrivelse}</p>
          </div>
          </Link></LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Nyheder;