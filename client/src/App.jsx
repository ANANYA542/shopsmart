import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import ComboExperience from './pages/ComboExperience';
import GiftBuilder from './pages/GiftBuilder';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/curations" element={<Shop />} /> 
              <Route path="/editorial" element={<Shop />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/combo" element={<ComboExperience />} />
              <Route path="/gift-builder" element={<GiftBuilder />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
