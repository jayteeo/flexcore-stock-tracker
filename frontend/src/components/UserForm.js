import { useState, useEffect } from "react";
import { useCoresContext } from "../hooks/useCoresContext.js";


const UserForm = () => {
    const { dispatch } = useCoresContext;
    const [cores, setCores] = useState([]);
    const [selectedCore, setSelectedCore] = useState("");

    const [size, setSize] = useState('');
    const [action, setAction] = useState('');
    const [count, setCount] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    //fetch data for dropdown
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cores', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
                })
            
            .then(response => response.json());
            setCores(response);

        }
        fetchData()}, []);

        const handleCoreChange = (e) => {
            setSelectedCore(e.target.value);    
        }

        //handle submit
        const handleSubmit = async (e) => {
            e.preventDefault();

            const coreCountChange = {size, action, count};

            const response = await fetch('/api/cores/updateCoreStock', {
                method: 'POST',
                body: JSON.stringify(coreCountChange),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }); 

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setEmptyFields(json.emptyFields);
            }

            if (response.ok) {
                setSize('');
                setAction('');
                setCount('');
                setEmptyFields([]);
                console.log('Updated Core', json);
                dispatch({type: 'CREATE_CORE', payload: json});
            }

            
                
        }
    
        return (
            <div>
                <form action="" className="create" id="admin-form" onSubmit={handleSubmit}>
                <h3>Add/Remove Cores</h3>
                
                <label>Core Size: </label>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="">Select Core...</option>
                    {cores?.map((cores, index) => (
                        <option key={index} value={cores.id}>
                            {cores.size}
                        </option>
                    ))}
                </select>

                <label>Action: </label>
                <select value={action} onChange={(e) => setAction(e.target.value)}>
                    <option>Select</option>
                    <option>Add</option>
                    <option>Subtract</option>
                </select>
                <label>Amount: </label>
                
                <input 
                    type="number" 
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    className={emptyFields?.includes('count') ? 'error' : ''}

                />
                


                <button>Change Core Amount</button>
                {error && <div className="error">{error}</div>}
            </form>
        
            </div>
            
        )


}

export default UserForm