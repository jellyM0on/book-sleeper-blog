import React from "react";
import { useState } from 'react';

import Sort from '../components//sort-works';
import WorksList from '../components/selection-section';

export default function WorksSelection({data}){

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
        <div>
            <Sort setSortKey={setSortKey}/>
            <WorksList data={sortKey === 'alphabet' ? alphaSorted() : dateSorted()}/>
        </div>
    )
}