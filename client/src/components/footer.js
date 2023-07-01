import React from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogOut } from "../hooks/useLogout"

export default function Footer(){
    const { logout } = useLogOut(); 
    const { user } = useAuthContext(); 

    const handleLogout = () => {
        logout(); 
    }

    return(
        <footer>
            <p>Copyright 2023</p>
            {user === null ? <Link to='/login'><p>Admin Log In</p></Link> : <p>Admin</p>}
            {user != null ? <button onClick={handleLogout}>Log out</button> : <></>}
            
        </footer>
    )
}