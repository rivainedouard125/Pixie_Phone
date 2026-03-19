import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar glass ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="Pixie Phone Logo" className="logo-img" />
        </Link>
        
        <div className={`navbar-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/store" className={location.pathname === '/store' ? 'active' : ''} onClick={closeMenu}>Boutique</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>À propos</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className={`cart-pill-btn ${cartCount > 0 ? 'active' : ''}`} title="Mon Panier" onClick={closeMenu}>
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge-nav">{cartCount}</span>}
          </Link>
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
