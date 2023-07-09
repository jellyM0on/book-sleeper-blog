import { Link, useLocation} from "react-router-dom";
import { matchPath } from "react-router-dom";

import navdecor from '../img-resources/nav-decor.png'
import Title from "./title-heading";

function NavTab(props){
    const {wordDecor} = props; 
    const location = useLocation();

    const NavLink = (props) => {
        const {page} = props;
        
        return(
            <Link to={`/${page.toLowerCase()}`} className='nav-link'>
                <h3 id={page}>{page}</h3>
                <img alt='navigation decoration' src={navdecor} 
                style={matchPath({path: `/${page}/*`, exact: false}, location.pathname) ? {visibility:'visible'} : {}}
                ></img>
            </Link>
        )
    }

    return(
        <div className='nav-tab'>
            {location.pathname === '/' ? <></> : <Link to='/'> <Title titleClass='nav-title'/> </Link> }
            <div className='nav-decor'>
                <p><i>Random Word</i></p>
                <p>"{wordDecor}"</p>    
            </div>
           
            <div className='nav-links'>
                <NavLink page='Works'/>
                <NavLink page='Contact'/>
            </div>
        </div>
    )
}

export default NavTab; 