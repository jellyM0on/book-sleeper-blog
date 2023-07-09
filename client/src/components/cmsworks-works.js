import { useWorksContext } from "../hooks/useWorksContext";
import { Link } from "react-router-dom";

export default function CMSWorksList(){
    const {works} = useWorksContext()

    const modifiedDate = (date) => {
        date = new Date(date); 
        const month = date.getMonth() +1; 
        const day = date.getUTCDate() +1; 
        const year = date.getFullYear(); 
        return `${month} / ${day} / ${year}`
    }
    
    
    const ListItem = ({work}) => {
        return(
            <Link to={`http://localhost:3000/content-management/${work._id}`}>
                <div className='cms-list-item' id={`cms-item-${work._id}`} onClick={() => {
                    }} >
                        <div className='list-item-text'>
                            <p>{work.title}</p>
                            {new Date(work.date) ? <p>{modifiedDate(work.date)}</p> : <p>{work.date}</p>}
                        </div>
                </div>
            </Link>
        )
    }

    return(
        <div className='cms-works-list'>
            <h3>All Posts</h3>
            <Link to='/content-management'> <button className='new-post-btn'>+ New Post</button> </Link>
            {(works).map((x, i) => {
                return(
                    <ListItem work={x} key={i}/>
                )
            })}
        </div>
    )
}