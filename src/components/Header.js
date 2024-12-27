import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";
import "../styles/Header.css";

const Header = () => {
  const { totalQuantity } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 80);
    setDropdownTimeout(timeout);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsBurgerOpen(false);
  };

  useEffect(() => {
    if (totalQuantity > 0) {
      triggerShake();
    }
  }, [totalQuantity]);

  const isHomePage = location.pathname === "/";

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchQuery}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isHomePage ? (scrolled ? "header-home scrolled" : "header-home") : "header"}>
      <div className="hero-info-div-mobile">
            <div className="hero-info-mobile">
              <img className="hero-info-icon-mobile" alt="" src="fragtikon.svg" height="36" />
              <div className="hero-info-p-mobile">
                <p>
                  <strong>Gratis fragt</strong>
                </p>
                <p>Når du bestiller for 499 kr.</p>
              </div>
            </div>
            <div className="hero-info-mobile">
              <img className="hero-info-icon-mobile" alt="" src="leveringikon.svg" height="36" />
              <div className="hero-info-p-mobile">
                <p>
                  <strong>Hurtig levering</strong>
                </p>
                <p>Levering 1-3 hverdage</p>
              </div>
            </div>
            <div className="hero-info-mobile">
              <img className="hero-info-icon-mobile" alt="" src="stjerneikon.svg" height="36" />
              <div className="hero-info-p-mobile">
                <p>
                  <strong>4,0 stjerner</strong>
                </p>
                <p>Baseret på +672 anmeldelser </p>
              </div>
            </div>
          </div>
        {isHomePage && <div className="header-blur-overlay"></div>}
        <div className="header-container">
          <Link to="/" className="logo">
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <button type="submit" className="search-button">
              <img src="/searchicon.png" alt="Search" height="19" width="19" />
            </button>
            <input
              type="text"
              placeholder="Søg efter Pokémon kort.."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
          <div className="header-icons">
            <div className="login-icon">
              <img height="28" width="24"
                src={isHomePage ? (scrolled ? "/loginblack.svg" : "/login.svg") : "/loginblack.svg"}
                alt="Login"
              />
            </div>
            <div
              className={`cart-icon ${isShaking ? "shake" : ""}`}
              onClick={toggleSidebar}
            >
              <img height="28" width="29"
                src={isHomePage ? (scrolled ? "/kurvblack.svg" : "/kurv.svg") : "/kurvblack.svg"}
                alt="Cart"
              />
              <span className="cart-badge">{totalQuantity}</span>
            </div>
            <div className="burger-menu" onClick={toggleBurgerMenu} aria-expanded={isBurgerOpen}>
              <img src={isBurgerOpen ? "/burgericonopen.svg" : "/burgericonclosed.svg"} alt="Menu" />
            </div>
          </div>
        </div>

        <nav className={isBurgerOpen ? "nav open" : "nav"}>
        
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <form className="search-bar-mobile" onSubmit={handleSearchSubmit}>
            <button type="submit" className="search-button">
              <img src="/searchicon.png" alt="Search" height="19" width="19" />
            </button>
            <input
              type="text"
              placeholder="Søg efter Pokémon kort.."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
            <Link className="seriera" to="/shop">Pokémon serier</Link>
            <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
              <h1>Pokemon TCG serier</h1>
              <div className="ddserier">
                <Link to={{ pathname: "/shop", search: "?collection=Prismatic Evolutions" }} state={{ collectionName: "Pokémon Prismatic Evolutions" }} onClick={handleLinkClick}>
                  <img src="/prismatic-serie.svg" alt="Prismatic Evolutions" width="267" height="142" />
                </Link>
                <Link to={{ pathname: "/shop", search: "?collection=Surging Sparks" }} state={{ collectionName: "Pokémon Surging Sparks" }} onClick={handleLinkClick}>
                  <img src="/surging-serie.svg" alt="Surging Sparks" width="267" height="142" />
                </Link>
                <Link to={{ pathname: "/shop", search: "?collection=Stellar Crown" }} state={{ collectionName: "Pokémon Stellar Crown" }} onClick={handleLinkClick}>
                  <img src="/stellar-serie.svg" alt="Stellar Crown" width="267" height="142" />
                </Link>
              </div>
            </div>
          </div>
          <Link to="/shop?type=Gradede kort" onClick={handleLinkClick}>Gradede kort</Link>
          <Link to="/shop?type=Tilbehør" onClick={handleLinkClick}>Tilbehør</Link>
          <Link to="/shop?type=Figurer og bamser" onClick={handleLinkClick}>Figurer & bamser</Link>
          <Link to="/Omos" onClick={handleLinkClick}>Om os</Link>
          <Link to="/Nyheder" onClick={handleLinkClick}>Nyheder</Link>
        </nav>
        <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </header>
      {isHomePage && (
        <div className="hero-image-div">
          <img
            src="heroimg.webp"
            alt="hero-header-image"
            className="hero-header-image"
          />
          <div className="hero-info-div">
            <div className="hero-info">
              <img className="hero-info-icon" alt="" src="fragtikon.svg" height="36" width="55" />
              <div className="hero-info-p">
                <p>
                  <strong>Gratis fragt</strong>
                </p>
                <p>Når du bestiller for 499 kr.</p>
              </div>
            </div>
            <div className="hero-info">
              <img className="hero-info-icon" alt="" src="leveringikon.svg" height="36" width="55" />
              <div className="hero-info-p">
                <p>
                  <strong>Hurtig levering</strong>
                </p>
                <p>Levering 1-3 hverdage</p>
              </div>
            </div>
            <div className="hero-info">
              <img className="hero-info-icon" alt="" src="stjerneikon.svg" height="36" width="55" />
              <div className="hero-info-p">
                <p>
                  <strong>4,0 stjerner</strong>
                </p>
                <p>Baseret på +672 anmeldelser </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;