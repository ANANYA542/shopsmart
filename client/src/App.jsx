import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import ComboExperience from './pages/ComboExperience';
import GiftBuilder from './pages/GiftBuilder';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/combo" element={<ComboExperience />} />
              <Route path="/gift-builder" element={<GiftBuilder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
