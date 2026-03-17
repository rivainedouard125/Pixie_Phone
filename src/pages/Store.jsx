import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Pages.css';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedBrand, setSelectedBrand] = useState('Tous');
  const [selectedPart, setSelectedPart] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState(null);
  const { addToCart, cartCount } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const categories = ['Tous', 'Téléphones', 'Ordinateurs', 'Tablettes', 'Accessoires'];
  const brands = ['Tous', 'Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Autre'];
  const parts = ['Tous', 'Écran', 'Batterie', 'Caméra', 'Châssis', 'Outils', 'Chargeur'];

  const products = [
    // Apple
    { id: 1, name: 'Écran iPhone 15 Pro OLED', price: 299.00, category: 'Téléphones', brand: 'Apple', type: 'Écran', image: '/images/products/iphone15-screen.png' },
    { id: 2, name: 'Batterie Originale MacBook Pro 14"', price: 159.00, category: 'Ordinateurs', brand: 'Apple', type: 'Batterie', image: '/images/products/macbook-battery.png' },
    { id: 3, name: 'Écran iPad Pro 12.9" M2', price: 449.00, category: 'Tablettes', brand: 'Apple', type: 'Écran', image: '/images/products/ipad-screen.png' },
    { id: 7, name: 'Batterie iPhone 14 Pro', price: 89.00, category: 'Téléphones', brand: 'Apple', type: 'Batterie', image: '/images/products/phone-battery.png' },
    { id: 9, name: 'Module Photo iPhone 14 Pro Max', price: 145.00, category: 'Téléphones', brand: 'Apple', type: 'Caméra', image: '/images/products/camera-module.png' },
    { id: 13, name: 'Chargeur Apple 20W USB-C', price: 25.00, category: 'Accessoires', brand: 'Apple', type: 'Chargeur', image: '/images/products/charger.png' },
    
    // Samsung
    { id: 8, name: 'Écran Dynamic AMOLED S23 Ultra', price: 329.00, category: 'Téléphones', brand: 'Samsung', type: 'Écran', image: '/images/products/samsung-screen.png' },
    { id: 15, name: 'Batterie Galaxy S22 Plus', price: 69.00, category: 'Téléphones', brand: 'Samsung', type: 'Batterie', image: '/images/products/phone-battery.png' },
    { id: 16, name: 'Connecteur Charge S23 Plus', price: 45.00, category: 'Téléphones', brand: 'Samsung', type: 'Châssis', image: '/images/products/charging-port.png' },
    
    // Xiaomi & Others
    { id: 10, name: 'Écran LCD Xiaomi 13 Pro', price: 189.00, category: 'Téléphones', brand: 'Xiaomi', type: 'Écran', image: '/images/products/iphone15-screen.png' }, // Reusing premium OLED shot for quality
    { id: 12, name: 'Batterie Haute Capacité Mi 11', price: 49.00, category: 'Téléphones', brand: 'Xiaomi', type: 'Batterie', image: '/images/products/phone-battery.png' },
    
    // Tools & Professional Accessories
    { id: 6, name: 'Kit Maintenance Pro Pixie', price: 89.00, category: 'Accessoires', brand: 'Autre', type: 'Outils', image: '/images/products/toolkit.png' },
    { id: 4, name: 'Station de soudage Precision', price: 185.00, category: 'Accessoires', brand: 'Autre', type: 'Outils', image: '/images/products/solder-station.png' },
    { id: 18, name: 'Microscope Numérique Réparation', price: 215.00, category: 'Accessoires', brand: 'Autre', type: 'Outils', image: '/images/products/microscope.png' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Tous' || product.brand === selectedBrand;
    const matchesPart = selectedPart === 'Tous' || product.type === selectedPart;
    return matchesSearch && matchesCategory && matchesBrand && matchesPart;
  });

  return (
    <div className="page-container container animate-fade">
      <header className="page-header">
        <h1>Boutique <span className="text-gradient">Pixie</span></h1>
        <p>Expertise et Qualité • {products.length} articles disponibles</p>
        
        <div className="search-bar-container glass">
          <span style={{ fontSize: '1.2rem' }}>🔍</span>
          <input 
            type="text" 
            placeholder="Rechercher une pièce (ex: iPhone 13, batterie...)" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {cartCount > 0 && <div className="cart-badge">🛒 {cartCount} Article{cartCount > 1 ? 's' : ''} dans le Panier</div>}
      </header>

      <div className="store-layout">
        <aside className="filter-sidebar glass">
          <div className="filter-section">
            <h3>CATÉGORIE</h3>
            <div className="filter-scroller">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-pill ${cat === selectedCategory ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section" style={{ marginTop: '24px' }}>
            <h3>MARQUE</h3>
            <div className="filter-scroller">
              {brands.map(brand => (
                <button 
                  key={brand} 
                  className={`filter-pill ${brand === selectedBrand ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section" style={{ marginTop: '24px' }}>
            <h3>TYPE DE PIÈCE</h3>
            <div className="filter-scroller">
              {parts.map(part => (
                <button 
                  key={part} 
                  className={`filter-pill ${part === selectedPart ? 'active' : ''}`}
                  onClick={() => setSelectedPart(part)}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="btn-secondary" 
            style={{ width: '100%', marginTop: '32px', borderRadius: '100px' }}
            onClick={() => {
              setSelectedCategory('Tous');
              setSelectedBrand('Tous');
              setSelectedPart('Tous');
              setSearchQuery('');
            }}
          >
            Réinitialiser
          </button>
        </aside>

        <section className="product-grid">
          {filteredProducts.length > 0 ? filteredProducts.map(product => (
            <div key={product.id} className="product-card glass">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
              </div>
              <div className="product-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="product-category">{product.brand}</span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{product.type}</span>
                </div>
                <h3>{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">€{product.price.toFixed(2)}</span>
                  <button 
                    className={`btn-primary small ${addedId === product.id ? 'added' : ''}`} 
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedId === product.id ? '✓ Ajouté' : 'Ajouter'}
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="glass" style={{ gridColumn: '1 / -1', padding: '100px', textAlign: 'center', borderRadius: '32px' }}>
              <span style={{ fontSize: '3rem', marginBottom: '20px', display: 'block' }}>🔍</span>
              <h3>Aucune pièce trouvée</h3>
              <p style={{ color: 'var(--color-text-dim)', marginTop: '8px' }}>Essayez d'ajuster vos filtres ou votre recherche.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Store;
