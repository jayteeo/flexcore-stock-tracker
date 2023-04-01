import { useEffect, useState } from "react";

//components
import CoresDetails from '../components/CoresDetails.js'


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
            <div className="cores">
                {cores && cores.map((core) => (
                    <CoresDetails key={core._id} core={core} />
                ))}
            </div>
        </div>
    )
}

export default Home;