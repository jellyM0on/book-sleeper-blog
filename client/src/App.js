import './App.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home-page';
import Contact from './components/contact-page';
import Works from './components/works-page';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/works' element ={<Works/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
