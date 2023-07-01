import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
    const {dispatch} = useAuthContext()

    const logout = async (email, password) => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'})
    }
    
    return {logout}
}