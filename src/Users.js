const Users = ({ results }) => {

    return (

        <div className="user-list">

        {results.map(result => (
            <ul className="user" key={result.id} >
                <h2>{result.name}</h2>
                <li>Username: {result.username}</li>
                <li>Email: {result.email}</li>
                <li>lihone: {result.lihone}</li>
                <li>Website: {result.website}</li>
                    <ul>
                        <li>Street: {result.address.street}</li>
                        <li>Suite: {result.address.suite}</li>
                        <li>City: {result.address.city}</li>
                        <li>Zipcode: {result.address.zipcode}</li>
                        <ul>
                            <li>{result.address.geo.lat}</li>
                            <li>{result.address.geo.lng}</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Company name: {result.company.name}</li>
                        <li>Slogan: {result.company.catchPhrase}</li>
                        <li>Business: {result.company.bs}</li>
                    </ul>
            </ul>
        ))}

        <button>Previous</button>
        <button>Next</button>
        
        </div>

    );
}

export default Users;