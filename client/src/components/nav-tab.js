import React from "react";
import { Link, useLocation} from "react-router-dom";

import Title from "./title-heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NavTab(props){

    const location = useLocation();

    return(
        <div class='nav-tab'>
            {location.pathname == '/' ? <></> : <Link to='/'> <Title titleClass='nav-title'/> </Link> }
            <div class='nav-links'>
                <Link to='/works'><h3 id='works'>Works</h3></Link>
                <Link to='/contact'><h3 id='contact'>Contact</h3></Link>
            </div>
        
        
          
        </div>
    )
}

export default NavTab; 