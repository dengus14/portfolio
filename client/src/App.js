import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactForm/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  

  return (
    <div className="app-container">
      <NavBar />

      <main className="main-content">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Footer />
        
        
      </main>

      
    </div>
  );
}

export default App;
