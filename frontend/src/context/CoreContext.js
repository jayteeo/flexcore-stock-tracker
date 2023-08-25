import { createContext, useReducer } from "react"

export const CoresContext = createContext();

export const coresReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CORES':
            return {
                cores: action.payload
            }
        case 'CREATE_CORE':
            return {
                cores: [...state.cores, action.payload]
            }
        case 'DELETE_CORE':
            return {
                cores: state.cores.filter((w) => w._id !== action.payload._id)
            }
            case 'UPDATE_CORE':
                console.log(state.cores)
            return {
                
                // cores: [...state.cores]
                // cores: [...state.cores, state.cores.filter((w) => w.size === action.payload.size)]
                // cores: [state.cores.filter((w) => w.value == action.value)]

                // cores: state.cores.map((cores) => 
                //     cores === action.payload.size ? {
                //         ...action.payload.size
                //     }: cores
                // )

                cores: state.cores.map((w) => w.size == action.payload)

                
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
        <CoresContext.Provider value={{...state, dispatch}}>
            { children }
        </CoresContext.Provider>
    )
}

