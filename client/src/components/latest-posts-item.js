import { m } from "framer-motion";
import { Link } from "react-router-dom";

export default function LatestPostItem(props){
    const {title, date, id} = props;

    return(
        <Link to={`/works/${id}`} class='latest-post-item'> 
            <li>
                <p>{title}</p> 
                <p>...........................</p>
                <p>{date}</p>
            </li>
        </Link>

   
        
    )
}