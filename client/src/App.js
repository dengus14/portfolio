import { useEffect } from 'react';
import { getData } from './api/fetchHook/fetchHealth';
import Contact from './components/ContactForm/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Contact />
      <ToastContainer />
    </React.Fragment>
    
  );
}



export default App;

