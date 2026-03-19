import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Pages.css';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedBrand, setSelectedBrand] = useState('Tous');
  const [selectedPart, setSelectedPart] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState(null);
  const [isFilterOverlayOpen, setIsFilterOverlayOpen] = useState(false);
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

  const activeFiltersCount = (selectedBrand !== 'Tous' ? 1 : 0) + (selectedPart !== 'Tous' ? 1 : 0);

  return (
    <div className="page-container container animate-fade">
      <header className="store-header-compact">
        <div className="header-top">
          <h1>Boutique <span className="text-gradient">Pixie</span></h1>
        </div>
        
        <div className="search-filter-row">
          <div className="search-box glass">
            <span>🔍</span>
            <input 
              type="text" 
              placeholder="Que cherchez-vous ?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filter-dropdown-container">
            <button 
              className={`btn-filter-actions glass ${activeFiltersCount > 0 ? 'active' : ''}`}
              onClick={() => setIsFilterOverlayOpen(!isFilterOverlayOpen)}
              title="Filtres Avancés"
            >
              <span style={{ fontSize: '1.1rem' }}>🎚️</span>
              <span className="btn-label-mobile">FILTRE</span>
              {activeFiltersCount > 0 && <span className="filter-count">{activeFiltersCount}</span>}
            </button>

            {/* Dropdown Overlay */}
            {isFilterOverlayOpen && (
              <>
                <div className="dropdown-backdrop" onClick={() => setIsFilterOverlayOpen(false)}></div>
                <div className="filter-dropdown-content glass animate-scale-in">
                  <div className="dropdown-body">
                    <div className="filter-group">
                      <h4>MARQUE</h4>
                      <div className="pill-grid">
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

                    <div className="filter-group">
                      <h4>TYPE DE PIÈCE</h4>
                      <div className="pill-grid">
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
                  </div>

                  <div className="dropdown-footer">
                    <button className="btn-primary small" style={{ width: '100%' }} onClick={() => setIsFilterOverlayOpen(false)}>
                      Appliquer
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="category-scroller-main">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`cat-pill ${cat === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="store-results-info">
        <span>{filteredProducts.length} articles trouvés</span>
        { (activeFiltersCount > 0 || searchQuery) && (
          <button className="text-reset-btn" onClick={() => {
            setSelectedCategory('Tous');
            setSelectedBrand('Tous');
            setSelectedPart('Tous');
            setSearchQuery('');
          }}>Réinitialiser</button>
        )}
      </div>

      <div className="store-content">
        {/* Desktop Sidebar (hidden on mobile) */}
        <aside className="filter-sidebar-desktop glass">
          <div className="sidebar-section">
            <h3>MARQUE</h3>
            <div className="sidebar-filter-list">
              {brands.map(brand => (
                <button 
                  key={brand} 
                  className={`sidebar-link ${brand === selectedBrand ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
          <div className="sidebar-section">
            <h3>TYPE DE PIÈCE</h3>
            <div className="sidebar-filter-list">
              {parts.map(part => (
                <button 
                  key={part} 
                  className={`sidebar-link ${part === selectedPart ? 'active' : ''}`}
                  onClick={() => setSelectedPart(part)}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>
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
            <div className="no-results glass">
              <span>🔍</span>
              <h3>Aucune pièce trouvée</h3>
              <p>Essayez d'ajuster vos filtres.</p>
            </div>
          )}
        </section>
      </div>

    </div>
  );
};

export default Store;
