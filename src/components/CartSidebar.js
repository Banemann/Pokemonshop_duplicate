import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, totalQuantity } = useCart();

  const handleIncrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      updateQuantity(id, product.quantity + 1);
    }
  };

  const handleDecrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      if (product.quantity > 1) {
        updateQuantity(id, product.quantity - 1);
      } else {
        removeFromCart(id);
      }
    }
  };

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const freeShippingThreshold = 499;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - total);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <h2>Din Kurv</h2>
        <div className="cart-icon" onClick={onClose}>
        <img src="kurv.svg" alt="Cart" height="28" width="29"/>
          <span className="cart-badge">{totalQuantity}</span>
        </div>
        
        </div>
{cart.length > 0 ? (
  <>
    <div className="cart-items-container">
      <ul className="cart-items">
        {cart.map((product) => (
          <li key={product.id} className="cart-item-card">
            <div className='cartimgdiv'>
            <img src={product.image} alt={product.cardname} className="cart-item-image" />
            </div>
            <div className="cart-item-info">
              <h3 className="cartname">{product.cardname}</h3>
              <p className="cartprice">{`Pris ${product.price.toFixed()},00 kr.`}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncrease(product.id)}>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="free-shipping-bar">
              {total >= freeShippingThreshold ? (
                <p>Du har opnået <strong>gratis fragt!</strong></p>
              ) : (
                <p>Køb for <strong>{amountToFreeShipping} kr.</strong> mere og få <strong>gratis fragt</strong></p>
              )}
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(total / freeShippingThreshold) * 100}%` }}></div>
              </div>
            </div>
    </div>
    <div className="cart-total">
      <p className="checkout-note">Inkl. moms. fragten udregnes ved checkout</p>
      <button className="checkout-btn" onClick={onClose}>Til checkout</button> 
    </div>
  </>
) : (
  <div className="tomkurv">
    <p>Din kurv er tom!</p>
  </div>
)}
    </div>
  );
};

export default CartSidebar;
