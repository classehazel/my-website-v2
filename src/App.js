import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Program from './pages/Program';
import Gallery from './pages/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/program" element={<Program />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
        </>
  );
}

export default App;
