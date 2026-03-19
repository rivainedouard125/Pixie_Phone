import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Store from './pages/Store';
import Service from './pages/Service';
import About from './pages/About';
import Cart from './pages/Cart';
import Terms from './pages/Terms';
import SalesTerms from './pages/SalesTerms';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="bg-ambient">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>
          <div className="blob blob-6"></div>
        </div>
        <div style={{ background: 'transparent', minHeight: '100vh', color: 'var(--color-text)', position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sales-terms" element={<SalesTerms />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
