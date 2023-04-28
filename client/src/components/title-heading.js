import React from "react";

export default function Title(props){  
    const {titleClass} = props; 

    return(
        <div class={`title ${titleClass}`} >
            <h1>book<br></br>sleeper</h1>
            <h2>by yl</h2>
            <img></img>
        </div>
        
    )
}

