import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PostNav({data, postData}){
    //identify index position
    const currentIndex = data.findIndex((d) => d == postData)
    console.log(currentIndex); 

    const backData = data[currentIndex-1]; 
    const nextData = data[currentIndex+1]; 

    return(
        <div>
            {!backData ? <></> :  <Link to={`/works/${backData._id}`}>back</Link> }
            {!nextData ? <></> :  <Link to={`/works/${nextData._id}`}>next</Link>}
        </div>
    )
}