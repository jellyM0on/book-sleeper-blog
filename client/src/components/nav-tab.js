import React from "react";
import { Link, useLocation} from "react-router-dom";
import navdecor from '../img-resources/nav-decor.png'

import Title from "./title-heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NavTab(){

    const location = useLocation();

    const NavLink = (props) => {
        const {page} = props
        return(
            <Link to={`/${page}`} class='nav-link'>
                <h3 id={page}>{page}</h3>
                <img src={navdecor} 
                style={location.pathname == `/${page}` ? {display:'unset'} : {}}
                ></img>
            </Link>
        )
    }
    return(
        <div class='nav-tab'>
            <div class='nav-decor'>
                <p>Word of the day</p>
                <p>Chivalry</p>
            </div>
            {location.pathname == '/' ? <></> : <Link to='/'> <Title titleClass='nav-title'/> </Link> }
            <div class='nav-links'>
                <NavLink page='Works'/>
                <NavLink page='Contact'/>
            </div>
        </div>
    )
}

export default NavTab; 