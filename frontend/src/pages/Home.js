import { useEffect, useState } from "react";


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
                    <p key={core._id}>{cores.size}</p>
                ))}
            </div>
        </div>
    )
}

export default Home;