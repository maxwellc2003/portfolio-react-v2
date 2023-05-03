import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>Maxwell Colby | Jr. Developer</title>
          <meta name="description" content="Personal Porfolio" />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
