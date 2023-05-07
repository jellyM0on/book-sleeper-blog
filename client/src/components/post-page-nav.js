import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PostNav({data, postData}){
    //identify index position
    const currentIndex = data.findIndex((d) => d == postData)
    console.log(currentIndex); 

    const backData = data[currentIndex-1]; 
    const nextData = data[currentIndex+1]; 

    return(
        <div class='post-nav-btns'>
            {!backData ? <></> :  <Link to={`/works/${backData._id}`} class='post-back-btn'>back</Link> }
            {!nextData ? <></> :  <Link to={`/works/${nextData._id}`} class='post-next-btn'>next</Link>}
        </div>
    )
}