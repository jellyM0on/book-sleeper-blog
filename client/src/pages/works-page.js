import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import WorksHeader from '../components/works-header';

function Works(){

    const [page, setPage] = useState(''); 
    const loc = useLocation(); 

    useEffect(() => {
        if(!(document.querySelector('.works-content'))){
            setPage(0); 
        } else {
            const currPage = document.querySelector('.works-content'); 
            setPage(currPage.id)
        }
    }, [loc.pathname])

    const [font, setFont] = useState(); 
    const [fontSize, setFontSize] = useState(); 
    const [sortKey, setSortKey] = useState(); 
    const [sortedData, setSortedData] = useState(); 

    return(
        <div className='works-page'>
             <WorksHeader page={page}/>
            <Outlet context={{font, setFont, fontSize, setFontSize, 
                            sortKey, setSortKey,
                            sortedData, setSortedData}}/>
        </div>
    )
}



export default Works;