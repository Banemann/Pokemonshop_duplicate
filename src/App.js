import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Omos from './pages/Omos';
import Nyheder from './pages/Nyheder';
import ShopSingle from './pages/ShopSingle';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/omos" element={<Omos />} />
              <Route path="/nyheder" element={<Nyheder />} />
              <Route path="/shop/:productId" element={<ShopSingle />} />  
            </Routes>
          </main>
          <Footer />
          <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
