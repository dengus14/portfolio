import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import './App.css';

function Portfolio() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <section id="home" className="reveal" style={{ animationDelay: "0.2s" }}>
          <Home />
        </section>
        <section id="about" className="reveal" style={{ animationDelay: "0.5s" }}>
          <About />
        </section>
        <section id="projects" className="reveal" style={{ animationDelay: "0.8s" }}>
          <Projects />
        </section>
        <div className="reveal" style={{ animationDelay: "1.1s" }}>
          <Footer />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
