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
          <Route path="" component={Home} />
          <Route path="/membership" component={Membership} />
          <Route path="/program" component={Program} />
          <Route path="/gallery" component={Gallery} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
