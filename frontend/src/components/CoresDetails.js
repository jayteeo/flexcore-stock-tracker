const CoresDetails = ({ core }) => {     
    return (
        <div className="cores-details">
            <h4>Core Size: {core.size}</h4>
            <h4>Count: {core.count}</h4>
        </div>
    )
}

export default CoresDetails;