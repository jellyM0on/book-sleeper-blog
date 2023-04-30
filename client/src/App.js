import './App.css';
import Axios from 'axios'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Home from './components/home-page';
import Contact from './components/contact-page';
import Works from './components/works-page';
import NavTab from './components/nav-tab';
import Post from './components/post-page';

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
              <Route path='/'element={<Home latestData={data.slice(0, 3)}/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/works' element ={<Works data={data}/>}/>
              {data.map((d, i) => {
                <Route path={`/works/${d.title}`} element={<Post data={d}/>}/>
              })}
            </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
