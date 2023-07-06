import { createContext, useReducer } from 'react'

export const WorksContext = createContext()

export const worksReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKS': 
            return { works: action.payload }
        case 'CREATE_WORK': 
            return { works: [action.payload, ...state.works]}
        case 'DELETE_WORK': 
            return { works: state.works.filter((x) => x._id !== action.payload._id )}
        default: 
            return state
    }
}

export const WorksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(worksReducer, {
        works: null
    })
    
    return (
        <WorksContext.Provider value = {{...state, dispatch}}>
            { children }
        </WorksContext.Provider>
    )
}

