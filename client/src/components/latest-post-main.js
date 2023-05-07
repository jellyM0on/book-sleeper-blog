import React from "react";
import parse from 'html-react-parser'
import {Link} from 'react-router-dom'

export default function LatestPostMain({post}){
    return(
        <div class='latest-post-main'>
            <h3><Link to={`/works/${post._id}`}>{post.title}</Link></h3>
            <p>{post.content}</p>
            <p>{post.date}</p>
        </div>
    )
}