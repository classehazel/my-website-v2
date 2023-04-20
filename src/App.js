import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Program from "./pages/Program";
import Gallery from "./pages/Gallery";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/my-website-v2" element={<Home />} />
          <Route path="/my-website-v2/membership" element={<Membership />} />
          <Route path="/my-website-v2/program" element={<Program />} />
          <Route path="/my-website-v2/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
