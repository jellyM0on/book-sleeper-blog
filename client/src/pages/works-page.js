import { motion as m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import WorksHeader from '../components/works-header';

function Works({data}){

    const [page, setPage] = useState(''); 
    const loc = useLocation(); 

    useEffect(() => {
        if(loc.pathname == '/works'){
            setPage(0); 
        } else {
            const currPage = document.querySelector('.works-content'); 
            setPage(currPage.id)
        }
    }, [loc.pathname])

    return(
        <div class='works-page'>
             <WorksHeader page={page}/>
            <Outlet/>
       
        </div>
    )
}



export default Works;