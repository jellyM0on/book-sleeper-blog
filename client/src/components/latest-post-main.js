import React from "react";
import parse from 'html-react-parser'

export default function LatestPostMain({post}){


    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.date}</p>
        </div>
    )
}