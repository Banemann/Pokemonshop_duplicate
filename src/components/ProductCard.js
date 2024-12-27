import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateX = Math.min(Math.max(-deltaY / 10, -30), 30);
    const rotateY = Math.min(Math.max(deltaX / 10, -30), 30);

    setRotation({ x: rotateX, y: rotateY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };

  const buttonClass = product.lager > 0 ? 'add-to-bag-btn' : 'add-to-bag-btn out-of-stock';

  return (
    <div className="product-card">
      <Link to={`/shop/${product.id}`} className="product-card-link">
        <div
          className="cardimgdiv"
          onMouseMove={product.type === 'Single kort' ? handleMouseMove : undefined}
          onMouseLeave={product.type === 'Single kort' ? handleMouseLeave : undefined}
        >
          <img
            src={product.image}
            alt={product.cardname}
            className="product-image"
            width="176"
            height="246"
            style={{
              transform: isHovered
                ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                : 'rotateX(0deg) rotateY(0deg)',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
        <div className="product-info">
          <p className="cardgrade" tabIndex="0">{product.grade}</p>
          <p className="cardcollectionp" tabIndex="0">{product.collection}</p>
          <h3 className="cardnameh3" tabIndex="0">{product.cardname}</h3>
          <h3 className="cardprice" tabIndex="0">{`${product.price.toFixed()} kr.`}</h3>

          <div className="stock-indicator" tabIndex="0">
            <span
              className={`stock-light ${product.lager > 0 ? 'green' : 'red'}`}
            ></span>
            <span className="cardstockspan">{product.lager > 0 ? 'På lager' : 'Udsolgt'}</span>
          </div>
        </div>
      </Link>

      <button
        className={buttonClass}
        onClick={handleAddToCart}
        disabled={product.lager <= 0}
        aria-label={product.lager > 0 ? 'Tilføj til kurv' : 'Udsolgt'}
      >
        {product.lager > 0 ? 'Tilføj til kurv' : 'Udsolgt'}
      </button>
    </div>
  );
};

export default ProductCard;
