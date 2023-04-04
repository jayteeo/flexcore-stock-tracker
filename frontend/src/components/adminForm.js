import { useState } from "react";

const AdminForm = () => {
    const [size, setSize] = useState('');
    const [count, setCount] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const core = {size, count};

        const response = await fetch('/api/cores', {
            method: 'POST',
            body: JSON.stringify(core),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setSize('');
            setCount('');
            setError(null);
            console.log('Added new core!', json)
        }
    }

    return (
        <form action="" className="create" id="admin-form" onSubmit={handleSubmit}>
            <h3>Add New Core</h3>
            <label>Core Size: </label>
            <input 
                type="number"
                onChange={(e) => setSize(e.target.value)} 
                value={size}
            />

            <label>Core Count: </label>
            <input 
                type="number"
                onChange={(e) => setCount(e.target.value)} 
                value={count}
            />

            <button>Add Core</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AdminForm;