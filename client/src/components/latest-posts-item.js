import { m } from "framer-motion";
import { Link } from "react-router-dom";

export default function LatestPostItem(props){
    const {title, date} = props;
    const modifiedDate = (date) => {
        const month = date.getMonth() +1; 
        const day = date.getUTCDate(); 
        const year = date.getFullYear(); 
        return `${month} / ${day} / ${year}`
    }

    return(
        <li class='latest-post-item'>
            <Link to={`/works/${title}`}><p>{title}</p> </Link>
            <p>......</p>
            <p>{modifiedDate(new Date(date))}</p>
        </li>
        
    )
}