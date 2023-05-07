import { Link } from "react-router-dom";

export default function WorksHeader({page}){
    
    return(
        <div class='works-header'>
            {!page ? <h2>SELECTION</h2> 
            : <h2 class='active-selection'><Link to='/works'>SELECTION</Link> {'>'} {page}</h2> }
        </div>
    )
}