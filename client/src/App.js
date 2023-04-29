import './App.css';
import Axios from 'axios'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home-page';
import Contact from './components/contact-page';
import Works from './components/works-page';
import NavTab from './components/nav-tab';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    Axios.get('http://localhost:5000/read')
      .then((result) => {
        setData(result.data); 
      })
  }, [])
  
  return (
    <div className="App">
      <div class='cursor'></div>
      <BrowserRouter>
        <NavTab/>
        <AnimatePresence initial={true}>
          <Routes key={window.location.pathname}>
              <Route path='/'element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/works' element ={<Works data={data}/>}/>
            </Routes>
        </AnimatePresence>
         
      </BrowserRouter>

    </div>
  );
}

export default App;
