import { createContext, useReducer } from "react";

export const CoresContext = createContext();

export const coresReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CORES':
            return {
                cores: action.payload
            }
        case 'CREATE_CORE':
            return {
                cores: [action.payload, ...state.cores]
            }
        default: 
            return state
    }
}

export const CoresContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(coresReducer, {
        cores: null
    });

    

    return (
        <CoresContext.Provider value={{state, dispatch}}>
            { children }
        </CoresContext.Provider>
    )
}

