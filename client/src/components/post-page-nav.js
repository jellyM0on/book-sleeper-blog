import { Link } from "react-router-dom";

export default function PostNav({data, postData}){
    //identify index position
    const currentIndex = data.findIndex((d) => d === postData)

    const backData = data[currentIndex-1]; 
    const nextData = data[currentIndex+1]; 

    return(
        <div className='post-nav-btns'>
            {!backData ? <></> :  <Link to={`/works/${backData._id}`} className='post-back-btn'>back</Link> }
            {!nextData ? <></> :  <Link to={`/works/${nextData._id}`} className='post-next-btn'>next</Link>}
        </div>
    )
}