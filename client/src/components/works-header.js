import { Link } from "react-router-dom";

export default function WorksHeader(props){
    const {page} = props; 
    return(
        <div class='works-header'>
            {!page ? <h2>SELECTION</h2> 
            : <h2><Link to='/works'>SELECTION</Link> {'>'} {page}</h2> }
        </div>
    )
}