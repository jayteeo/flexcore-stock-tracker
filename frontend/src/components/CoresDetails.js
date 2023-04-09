import { useCoresContext } from "../hooks/useCoresContext"

const CoresDetails = ({ core }) => { 
    const { dispatch } = useCoresContext();

    const handleClick = async () => {
        const response = await fetch('/api/cores/' + core._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CORE', payload: json})
        }
    }


    
    return (
        <div className="cores-details">
            <h4>Core Size: {core.size}</h4>
            <h4>Count: {core.count}</h4>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default CoresDetails;