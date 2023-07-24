import { useState, useEffect } from "react";

const UserForm = () => {
    const [cores, setCores] = useState([]);
    const [selectedCore, setSelectedCore] = useState("");

    const [error, setError] = useState(null);

    //fetch data  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cores/', {
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

        const handleSubmit = async (e) => {

        }
    
        return (
            <div>
                <form action="" className="create" id="admin-form" onSubmit={handleSubmit}>
                <h3>Add/Remove Cores</h3>
                <label>Core Size: </label>
                <select value={selectedCore} onChange={handleCoreChange}>
                    <option value="">Select Core...</option>
                    {cores?.map((cores, index) => (
                        <option key={index} value={cores.id}>
                            {cores.size}
                        </option>
                    ))}
                </select>
                <label>Action: </label>
                <select>
                    <option>Add</option>
                    <option>Subtract</option>
                </select>
                <label>Amount: </label>
                <input type="text">
                </input>

                <button>Change Core Amount</button>
                {error && <div className="error">{error}</div>}
            </form>
        
            </div>
            
        )


}

export default UserForm