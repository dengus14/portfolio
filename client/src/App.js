import { useEffect } from 'react';
import { getData } from './api/fetchHook/fetchHealth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <NavBar /> 
      <div className="pt-4"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element ={<About />} />
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
