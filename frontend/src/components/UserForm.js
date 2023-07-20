import { useState, useEffect } from "react";

const UserForm = () => {
    const [cores, setCore] = useState([]);
    const [selectedCore, setSelectedCore] = useState("");

    //fetch data  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cores')
            setCore(response.data);

        }
        fetchData()}, []);

        const handleCoreChange = (e) => {
            setSelectedCore(e.target.value);    
        }
    
        return (
            <form action="" className="create" id="admin-form">
                <select value={selectedCore} onChange={handleCoreChange}>
                    <option value="">Select Core...</option>
                    {cores.map((core, index) => (
                        <option key={index} value={cores.value}>
                            {cores.label}
                        </option>
                    ))}
                </select>
            </form>
            
        )


}

export default UserForm