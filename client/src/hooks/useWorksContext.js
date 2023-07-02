import { WorksContext } from "../context/works-context";
import { useContext } from "react";

export const useWorksContext = () => {
    const context = useContext(WorksContext); 

    if(!context) {
        throw Error('useWorksContext must be used inside wc ')
    }

    return context
}