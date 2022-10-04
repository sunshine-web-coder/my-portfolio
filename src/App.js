import TopBar from "./components/topBar/TopBar";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
// import Testimonials from "./pages/testimonials/Testimonials";
// import Works from "./pages/works/Works";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <TopBar />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/works" element={<Works />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
