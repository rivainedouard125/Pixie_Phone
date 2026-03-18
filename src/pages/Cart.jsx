import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './Pages.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <h1>Votre <span className="text-gradient">Panier</span></h1>
        <p>Gérez vos articles et finalisez votre commande.</p>
      </header>

      {cart.length === 0 ? (
        <div className="cta-box glass empty-cart-box">
          <div className="cta-info">
            <span className="location-label">Shopping</span>
            <h2>Votre panier est vide</h2>
            <p>Il semble que vous n'ayez pas encore ajouté de pièces à votre panier. Parcourez notre boutique pour trouver ce dont vous avez besoin.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/store')}>Retourner à la boutique</button>
            </div>
          </div>
          <div className="cta-image-placeholder glass" style={{ background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10rem' }}>
            🛒
          </div>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="glass cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)} aria-label="Diminuer">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} aria-label="Augmenter">+</button>
                  </div>
                  <span className="cart-item-price">€{(item.price * item.quantity).toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="cart-item-remove" 
                    title="Supprimer l'article"
                    aria-label="Supprimer"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary glass">
            <h2 className="summary-title">Résumé</h2>
            <div className="summary-row">
              <span>Sous-total</span>
              <span className="summary-value">€{cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Livraison</span>
              <span className="summary-value delivery">Gratuite</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span className="summary-total-value">€{cartTotal.toFixed(2)}</span>
            </div>
            
            <label className="terms-checkbox">
              <input 
                type="checkbox" 
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span>
                J'accepte les <Link to="/terms" target="_blank">conditions générales de vente</Link>
              </span>
            </label>

            <button 
              className={`btn-primary lg ${!accepted ? 'disabled' : ''}`} 
              style={{ width: '100%', marginBottom: '16px' }} 
              disabled={!accepted}
              onClick={() => {
                alert('Merci pour votre commande ! Cette fonctionnalité de paiement est une démonstration.');
                clearCart();
                navigate('/');
              }}
            >
              Finaliser la commande
            </button>
            <button className="btn-secondary" style={{ width: '100%' }} onClick={() => navigate('/store')}>
              Continuer mes achats
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
