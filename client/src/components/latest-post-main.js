import {Link} from 'react-router-dom'

export default function LatestPostMain({post}){
    return(
        <div className='latest-post-main'>
            <h3><Link to={`/works/${post._id}`}>{post.title}</Link></h3>
            {post.content}
            <p>{post.date}</p>
        </div>
    )
}