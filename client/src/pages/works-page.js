import { motion as m } from 'framer-motion';

import Sort from '../components//sort-works';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorksList from '../components/selection-section';
import WorksHeader from '../components/works-header';
import Post from '../components/post-page';

function Works(props){
    const {data} = props; 

    const [sortKey, setSortKey] = useState(''); 

    const alphaSorted = () => {

        const findFirst = (data) => {
            const title = `${data.title}`; 
            const wordArr = title.split('');
            const letter = wordArr[0];
            return letter; 
        }

        const sorted = data.slice().sort((a, b) => a.title > b.title ? 1 : -1);

        let letters = []; 
        sorted.forEach((d) => {
            const letter = findFirst(d); 
            if (!letters.find(x => (x == letter))){
                letters.push(letter);
            }
        })
       
        let groupedArr = [];
        letters.forEach((x) => {
            let arr = []; 
            let key = x; 
            sorted.forEach((d) => {
                const letter = findFirst(d); 
                console.log(key); 
                if(letter == x){
                    arr.push(d); 
                }
            })
            groupedArr.push({key: key, works: arr}); 
        })

        return groupedArr; 
    }

    const dateSorted = () => {

        const sorted = data; 

        const findYear = (data) => {
            const dateObj = new Date(data.date)
            return dateObj.getFullYear(); 
        }

        let years = []; 
        sorted.forEach((d) => {
            const year = findYear(d);
            if (!years.find(x => (x == year))){
                years.push(year);
            }
        })

        let groupedArr = [];
        years.forEach((x) => {
            let arr = [];
            let key = x; 
            sorted.forEach((d) => {
                const year = findYear(d); 
                if(year == x){
                    arr.push(d); 
                }
            })
            groupedArr.push({key: key, works: arr}); 
        })

        return groupedArr; 
    }

    const SelectionPage = () => {
        return(
        <div class='works-selection'>
            <Sort setSortKey={setSortKey}/>
            <WorksList data={sortKey === 'alphabet' ? alphaSorted() : dateSorted()}/>
        </div>
        )
    }

    return(
    
        <div class='works-page'>
             <WorksHeader/>
             <div class='works-content'>
                <Sort setSortKey={setSortKey}/>
                <WorksList data={sortKey === 'alphabet' ? alphaSorted() : dateSorted()}/>
            </div>
        </div>
    )
}

export default Works;