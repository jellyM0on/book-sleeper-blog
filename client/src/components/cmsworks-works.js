import { useWorksContext } from "../hooks/useWorksContext";
import { Link } from "react-router-dom";

import CMSDeleteBtn from "./cmsdelete-btn";
import ConfirmNotif from "./notif-confirmation";

export default function CMSWorksList({setSelected, data}){
    const {works} = useWorksContext()

    function find(id){
        return works.find(x => x._id === id); 
    }

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
                <div className='cms-list-item' id={`${work._id}`} onClick={() => {
                    let nwork = find(work._id); 
                    nwork = {...nwork}; 
                    setSelected(nwork); 
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
            <Link to='/content-management'> <button onClick={() => setSelected(0)}  className='new-post-btn'>+ New Post</button> </Link>
            {(works).map((x, i) => {
                return(
                    <ListItem work={x} key={i}/>
                )
            })}
        </div>
    )
}