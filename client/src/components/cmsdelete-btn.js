import { useWorksContext } from "../hooks/useWorksContext";
import { useState } from "react";

import ConfirmNotif from "./notif-confirmation";
import deleteicon from '../img-resources/delete-icon.svg'

export default function CMSDeleteBtn({id}){
    const {works, dispatch} = useWorksContext()

    let [deleteStatus, setDelete] = useState(0)

    const deletePost = async(e) => {
        const currIndex = works.findIndex(x => x._id == id); 
        const nextIndex = works[currIndex+1]; 
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE', 
        })
        const json = await response.json()

        if (response.ok) {
          dispatch({type: 'DELETE_WORK', payload: json})
        }

        if(nextIndex){
            window.location.replace(`/content-management/${nextIndex._id}`)
        } else {
            window.location.replace('/content-management'); 
        }
        
    }

    const handleDelete = () => {
        setDelete(1)
    }

    const handleConfirm = () => {
        deletePost()
    }

    const handleCancel = () => {
        setDelete(0)
    }

    return(
        <div>
            {deleteStatus === 1 ? <ConfirmNotif text={'delete this post'} handleCancel={handleCancel} handleConfirm={handleConfirm}/> : <></>}
            <button type='button' onClick={handleDelete} className='cms-delete-btn'><img src={deleteicon}></img></button>
         </div>
    )
}