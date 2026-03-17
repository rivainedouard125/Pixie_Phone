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
        <div className="cta-box glass" style={{ textAlign: 'center', padding: '100px 40px' }}>
          <h2>Votre panier est vide</h2>
          <p>Il semble que vous n'ayez pas encore ajouté de pièces à votre panier.</p>
          <button className="btn-primary" style={{ marginTop: '32px' }} onClick={() => navigate('/store')}>retourner à la boutique</button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="glass cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '8px' }}>{item.name}</h3>
                  <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>{item.category}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '100px' }}>
                    <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', color: 'white', fontSize: '1.2rem' }}>-</button>
                    <span style={{ fontWeight: '700' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', color: 'white', fontSize: '1.2rem' }}>+</button>
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '1.2rem', minWidth: '80px', textAlign: 'right' }}>€{(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: 'var(--color-primary)', background: 'none', fontSize: '1.5rem', marginLeft: '12px' }}>×</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary glass">
            <h2 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Résumé</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--color-text-dim)' }}>
              <span>Sous-total</span>
              <span style={{ color: 'white', fontWeight: '700' }}>€{cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--color-text-dim)' }}>
              <span>Livraison</span>
              <span style={{ color: 'var(--color-accent)', fontWeight: '700' }}>Gratuite</span>
            </div>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '24px 0' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Total</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-primary)' }}>€{cartTotal.toFixed(2)}</span>
            </div>
            <div className="terms-checkbox">
              <input 
                type="checkbox" 
                id="cart-terms" 
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <label htmlFor="cart-terms">
                J'accepte les <Link to="/terms" target="_blank" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>conditions générales de vente</Link>
              </label>
            </div>
            <button 
              className="btn-primary lg" 
              style={{ width: '100%', marginBottom: '16px', opacity: accepted ? 1 : 0.5 }} 
              disabled={!accepted}
              onClick={() => {
                alert('Merci pour votre commande ! Cette fonctionnalité de paiement est une démonstration.');
                clearCart();
                navigate('/');
              }}
            >
              Commander
            </button>
            <button className="btn-secondary" style={{ width: '100%', padding: '12px' }} onClick={() => navigate('/store')}>
              Continuer mes achats
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
