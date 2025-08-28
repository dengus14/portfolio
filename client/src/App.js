

import { useEffect } from 'react';
import { getData } from './api/fetchHook/fetchHealth';
import Contact from './components/ContactForm/Contact';

function App() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Contact />
  );
}

export default App;
