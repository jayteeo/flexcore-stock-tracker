import { useEffect, useState } from "react";


//components
import CoresDetails from '../components/CoresDetails.js'
import AdminForm from "../components/AdminForm.js";


const Home = () => {
    const [cores, setCores] = useState(null)
    
    useEffect(() => {
        const fetchCores = async () => {
            const response = await fetch('/api/cores');
            const json = await response.json();

            if (response.ok) {
                setCores(json);
            }
        }

        fetchCores();
    }, [])

    return (
        <div className="home">
            <h3 className='core-title'>Core Details</h3>
            <div className="cores">
                {cores && cores.map((core) => (
                    <CoresDetails key={core._id} core={core} />
                ))}
            </div>
            <AdminForm />
        </div>
    )
}

export default Home;