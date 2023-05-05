import { m } from "framer-motion";
import { Link } from "react-router-dom";

export default function LatestPostItem(props){
    const {title, date} = props;

    return(
        <Link to={`/works/${title}`} class='latest-post-item'> 
            <li>
                <p>{title}</p> 
                <p>...........................</p>
                <p>{date}</p>
            </li>
        </Link>

   
        
    )
}