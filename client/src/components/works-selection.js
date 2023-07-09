import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useWorksContext } from "../hooks/useWorksContext";

import Sort from '../components//sort-works';
import WorksList from '../components/selection-section';

export default function WorksSelection(){
    const {sortKey, setSortKey, setSortedData} = useOutletContext(); 

    const { works } = useWorksContext()

    function alphaSorted(){

        const findFirst = (data) => {
            const title = `${data.title}`; 
            const wordArr = title.split('');
            const letter = wordArr[0];
            return letter; 
        }

        const sorted = works.slice().sort((a, b) => a.title > b.title ? 1 : -1);

        let letters = []; 
        sorted.forEach((d) => {
            const letter = findFirst(d); 
            if (!letters.find(x => (x === letter))){
                letters.push(letter);
            }
        })
       
        let groupedArr = [];
        letters.forEach((x) => {
            let arr = []; 
            let key = x; 
            sorted.forEach((d) => {
                const letter = findFirst(d); 
                if(letter === x){
                    arr.push(d); 
                }
            })
            groupedArr.push({key: key, works: arr}); 
        })

        return groupedArr; 
    }

    function dateSorted(){

        const sorted = works; 

        const findYear = (data) => {
            const dateObj = new Date(data.date)
            return dateObj.getFullYear(); 
        }

        let years = []; 
        sorted.forEach((d) => {
            const year = findYear(d);
            if (!years.find(x => (x === year))){
                years.push(year);
            }
        })

        let groupedArr = [];
        years.forEach((x) => {
            let arr = [];
            let key = x; 
            sorted.forEach((d) => {
                const year = findYear(d); 
                if(year === x){
                    arr.push(d); 
                }
            })
            groupedArr.push({key: key, works: arr}); 
        })

        return groupedArr; 
    }

    useEffect(() => {
        setSortedData(dateSorted()); 
    }, [])

    useEffect(() => {
        sortKey === 'alphabet' ? setSortedData(alphaSorted()) : setSortedData(dateSorted());
    }, [sortKey])

    return(
        <div className='works-content'>
            <Sort setSortKey={setSortKey} sortKey={sortKey}/>
            <WorksList data={sortKey === 'alphabet' ? alphaSorted() : dateSorted()}/>
        </div>
    )
}