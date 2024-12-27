import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import ProductCard from './ProductCard';
import '../styles/CardWheel.css';

const CardWheel = ({ products }) => {
  const cardsToShow = 4;
  const middleIndex = Math.max(0, Math.floor((products.length - cardsToShow) / 2));
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + cardsToShow, products.length - cardsToShow));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="card-wheel-container">
      <button className="arrow left-arrow" onClick={handlePrevClick} disabled={currentIndex === 0}>
  <img src="arrow1.svg" alt="left arrow" width="36" height="36" />
</button>
      <div className="card-wheel">
        {visibleProducts.map((product) => (
          <LazyLoad key={product.id} height={483} offset={100} once>
            <ProductCard
              product={{
                ...product,
                image: product.image_url,
              }}
            />
          </LazyLoad>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNextClick} disabled={currentIndex >= products.length - cardsToShow}>
  <img src="arrow2.svg" alt="right arrow" width="36" height="36" />
</button>
      <div className="scrollbar-container">
        <div className="scrollbar">
          <div
            className="scrollbar-thumb"
            style={{ width: `${(cardsToShow / products.length) * 100}%`, left: `${(currentIndex / products.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardWheel;