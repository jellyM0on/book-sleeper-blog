import React from 'react';

export default function CmsPage(){

    let currentDate = new Date(); 
    return(
        <div>
            <h2>Manage Content</h2>
            <h3>New Post</h3>
            <input type='date' defaultValue={`${new Date()}`}></input>
            <input></input>
            <input></input>
            <h3>All Posts</h3>
            {/* table of all posts with delete and edit buttons */}
        </div>
    )
}