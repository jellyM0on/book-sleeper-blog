import React from 'react'
import AddWorksForm from '../components/cmsworks-form'

export default function CmsPage(){

    let currentDate = new Date(); 
    return(
        <div>
            <h2>Manage Content</h2>
            <h3>New Post</h3>
            <AddWorksForm/>
            <h3>All Posts</h3>
            {/* table of all posts with delete and edit buttons */}
        </div>
    )
}