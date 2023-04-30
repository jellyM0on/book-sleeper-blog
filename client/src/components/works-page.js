import { motion as m } from 'framer-motion';
import NavTab from './nav-tab';
import Section from './selection-section';
import Sort from './sort-works';
import { useState, useEffect } from 'react';

function Works(props){
    const {data} = props; 

    const [sortKey, setSortKey] = useState(''); 

    const alphaSorted = data.slice().sort((a, b) => a.title > b.title ? 1 : -1);

    return(
        <div class='works-page'>
            <Sort setSortKey={setSortKey}/>
            <Section data={sortKey === 'alphabet' ? alphaSorted : data}/>

        </div>
    )
}

export default Works;