import { useState } from "react";

const adminForm = () => {
    const [size, setSize] = useState('');
    const [count, setCount] = useState('');

    return (
        <form action="" className="create" onSubmit={handleSubmit}>
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
        </form>
    )
}