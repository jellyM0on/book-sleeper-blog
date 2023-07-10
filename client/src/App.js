import './App.css';
import Axios from 'axios'; 
import parse from 'html-react-parser'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import { useWorksContext } from './hooks/useWorksContext';

import Home from './pages/home-page';
import Contact from './pages/contact-page';
import Works from './pages/works-page';
import NavTab from './components/nav-tab';
import Post from './components/post-page';
import WorksSelection from './components/works-selection';
import Loading from './pages/loading-page';
import CmsPage from './pages/cms-page';
import LogIn from './pages/login-page';
import Footer from './components/footer';

function App() {
  const { user } = useAuthContext();
  const [data, setData] = useState([{}]);
  const [wordDecor, setWordDecor] = useState();

  const {works, dispatch} = useWorksContext()

  
  useEffect(() => {
      Axios.get(`/api/read`)
      .then((result) => {
        dispatch({type: 'SET_WORKS', payload: result.data})
        setData(reformatData(result.data)); 
      })

    if(!wordDecor){
      getWord(); 
    }
  }, [])

  async function getWord(){
    Axios.get('https://api.datamuse.com/words?ml=poetry')
    .then((result) => {
      result = result.data
      const total = result.length; 
      const randomNum = Math.ceil(Math.random() * total) 
      setWordDecor(result[randomNum].word);
    })
  }

  const modifiedDate = (date) => {
    date = new Date(date); 
    const month = date.getMonth() +1; 
    const day = date.getUTCDate(); 
    const year = date.getFullYear(); 
    return `${month} / ${day} / ${year}`
}

  function reformatData(data){
    //reformat content & date
    data.forEach((d, i) => {
      d.content = parse(d.content); 
      d.date = modifiedDate(d.date); 
    })
    return data; 
  }

  return (
    <div className="App">
      {Object.keys(data[0]).length === 0 ? <Loading/> : 
      <BrowserRouter>
        <NavTab wordDecor={wordDecor}/>
          <Routes key={window.location.pathname}>
              <Route path='/'element={<Home latestData={works.slice(0, 3)}/>}/>
              <Route path='/admin' element={<CmsPage/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/login' element={!user ? <LogIn/> : <Navigate to='/content-management'/>}/>
              <Route path='/content-management' element={user ? <CmsPage/> : <Navigate to='/login'/>}/>
              {works.map((d, i) => {
                  return(
                    <Route path={`/content-management/${d._id}`} key={i} element={user ? <CmsPage form={d}/> : <Navigate to='/login'/>}/>
              )})}
              <Route path='/works' element={<Works/>}>
                <Route index element={<WorksSelection/>}/>
                {works.map((d, i) => {
                  return(
                    <Route path={`/works/${d._id}`}  key={i} element={<Post postData={d}/>}/>
                )
                })}
              </Route>
              <Route path="*" element={<div> Not found or you do not have permission.</div>}/>
            </Routes>
        <Footer/>
      </BrowserRouter> 
      }
    </div> 
  );
}

export default App;
