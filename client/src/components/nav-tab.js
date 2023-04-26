import React from "react";
import { Link } from "react-router-dom";

function NavTab(props){
    const {title} = props; 

    return(
        <Link to={`./${title}`}>
            <div class='nav-tab' >
                <h3>{title}</h3>
            </div>
        </Link>
       
    )
}

export default NavTab; 