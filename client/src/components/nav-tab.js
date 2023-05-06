import React from "react";
import { Link, useLocation} from "react-router-dom";

import navdecor from '../img-resources/nav-decor.png'
import Title from "./title-heading";

function NavTab(props){
    const {wordDecor} = props; 
    const location = useLocation();

    const NavLink = (props) => {
        const {page} = props
        return(
            <Link to={`/${page}`} class='nav-link'>
                <h3 id={page}>{page}</h3>
                <img src={navdecor} 
                style={location.pathname == `/${page}` ? {visibility:'visible'} : {}}
                ></img>
            </Link>
        )
    }

    // console.log(wordDecor) 
    return(
        <div class='nav-tab'>
            {location.pathname == '/' ? <></> : <Link to='/'> <Title titleClass='nav-title'/> </Link> }
            <div class='nav-decor'>
                <p><i>Random Word</i></p>
                <p>"{wordDecor}"</p>    
            </div>
           
            <div class='nav-links'>
                <NavLink page='Works'/>
                <NavLink page='Contact'/>
            </div>
        </div>
    )
}

export default NavTab; 