import React from "react";
import { useWorksContext } from "../hooks/useWorksContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function CMSWorksList({setSelected, data}){
    const [input, setInput] = useState(''); 

    const {works} = useWorksContext()

    function find(id){
        return works.find(x => x._id === id); 
    }

    const modifiedDate = (date) => {
        date = new Date(date); 
        const month = date.getMonth() +1; 
        const day = date.getUTCDate() +1; 
        const year = date.getFullYear(); 
        return `${month} / ${day} / ${year}`
    }
    
    
    const ListItem = ({work}) => {
        return(
            <Link to={`http://localhost:3000/content-management/${work._id}`}><div className='cms-list-item' id={`${work._id}`} onClick={() => {
                let nwork = find(work._id); 
                nwork = {...nwork}; 
                setSelected(nwork); 
                }} >
                    <p>{work.title}</p>
                    {new Date(work.date) ? <p>{modifiedDate(work.date)}</p> : <p>{work.date}</p>}
                    {/* <p>{work.date}</p> */}
            </div></Link>
       
           
        )
    }

    console.log(works); 
    return(
        <div className='cms-works-list'>
            <h3>All Posts</h3>
            <Link to='/content-management'> <p onClick={() => setSelected(0)}>+ New Post</p> </Link>
            {(works).map((x, i) => {
                return(
                    <ListItem work={x} key={i}/>
                )
            })}
        </div>
    )
}