import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  

  return (
    <div className="app-container">
      <div className="reveal" style={{ animationDelay: "0s" }}>
        <NavBar />
      </div>

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

export default App;
