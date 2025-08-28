import { useEffect } from 'react';
import { getData } from './api/fetchHook/fetchHealth';
import Contact from './components/ContactForm/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ContactForm from './components/ContactForm/Contact';

function App() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <NavBar /> 
      <div className="pt-4"> 
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
