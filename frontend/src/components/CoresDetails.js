const CoresDetails = ({ core }) => {
    return (
        <div className="cores-details">
            <h4>Core Size: {core.size}</h4>
            <p><strong>Count: </strong>{core.count}</p>
        </div>
    )
}

export default CoresDetails;