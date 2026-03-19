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
        <div className="cart-unified-card glass">
          <div className="cart-items-section">
            <h3 className="items-list-title">Votre Sélection</h3>
            {cart.map(item => (
              <div key={item.id} className="cart-item-receipt">
                <div className="item-left">
                  <div className="item-qty-badge">x{item.quantity}</div>
                  <div className="item-info-compact">
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                    <div className="item-row-controls">
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Supprimer</button>
                    </div>
                  </div>
                </div>
                
                <div className="item-right">
                  <span className="item-price-receipt">€{(item.price * item.quantity).toFixed(2)}</span>
                  <img src={item.image} alt={item.name} className="cart-item-img-mini" />
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary-section">
            <h2 className="summary-title">Résumé & Livraison</h2>
            
            <form className="checkout-form-grid">
              <div className="form-group">
                <label>Nom complet</label>
                <input type="text" placeholder="Jean Dupont" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="jean@example.com" required />
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label>Téléphone</label>
                  <input type="tel" placeholder="06 12 34 56 78" required />
                </div>
                <div className="form-group">
                  <label>Ville</label>
                  <input type="text" placeholder="Marseille" required />
                </div>
              </div>
              <div className="form-group">
                <label>Adresse de livraison</label>
                <textarea placeholder="123 Rue de la Réparation..." rows="2" required></textarea>
              </div>
            </form>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span className="summary-label">Sous-total</span>
              <span className="summary-value">€{cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Livraison</span>
              <span className="summary-value" style={{ opacity: 0.6, fontSize: '0.8rem', fontStyle: 'italic' }}>Calculé au paiement</span>
            </div>
            <div className="summary-row total">
              <span className="total-label">Total TTC</span>
              <span className="summary-total-value">€{cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="cart-checkout-actions">
              <label className="terms-checkbox">
                <input 
                  type="checkbox" 
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <span>J'accepte les <Link to="/sales-terms" target="_blank">conditions générales de vente</Link></span>
              </label>

              <div className="checkout-btns-row">
                <button 
                  className={`btn-primary lg ${!accepted ? 'disabled' : ''}`} 
                  disabled={!accepted}
                  onClick={() => {
                    alert('Merci pour votre commande ! Nous vous contacterons par email.');
                    clearCart();
                    navigate('/');
                  }}
                >
                  Finaliser la commande
                </button>
                <button className="btn-secondary" onClick={() => navigate('/store')}>
                  Retour
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
