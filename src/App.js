// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
 

const App = () => {
  return (
    <Router>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>

    
  );
};

export default App;
