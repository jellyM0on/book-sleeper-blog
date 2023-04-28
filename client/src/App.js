import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home-page';
import Contact from './components/contact-page';
import Works from './components/works-page';
import NavTab from './components/nav-tab';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavTab/>
        <AnimatePresence initial={true}>
          <Routes key={window.location.pathname}>
              <Route path='/'element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/works' element ={<Works/>}/>
            </Routes>
        </AnimatePresence>
         
      </BrowserRouter>

    </div>
  );
}

export default App;
