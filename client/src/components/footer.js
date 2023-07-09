import { useState } from "react";
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogOut } from "../hooks/useLogout"

import SocialLinks from "./social-links";
import ConfirmNotif from "./notif-confirmation";

export default function Footer(){
    const { logout } = useLogOut(); 
    const { user } = useAuthContext(); 

    let [logoutStatus, setLogout] = useState(0)

    const handleLogout = () => {
        setLogout(1); 
    }

    const handleConfirm = () => {
        setLogout(0)
        logout()
    }
    const handleCancel = () => {
        setLogout(0)
    }

    return(
        <footer>
            <div className='footer-main-items'>
                {user === null ? <button className='auth-btn'><Link to='/login'>Admin Log In</Link></button> : <button className='auth-btn'><Link to='/content-management'>Admin Management System</Link></button>}
                {user != null ? <button className='auth-btn' onClick={handleLogout}>Log out</button> : <></>}
                {user != null  && logoutStatus === 1 ? <ConfirmNotif text={"log out"} handleConfirm={handleConfirm} handleCancel={handleCancel}/> : <></>}
            </div>
            
            <SocialLinks/>
        </footer>
    )
}