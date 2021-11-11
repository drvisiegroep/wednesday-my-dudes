const Users = ({ results }) => {
    return (

        <div className="user-list">

        {results.map(result => (
            <div className="user" key={result.id} >
                <h2>Name: {result.name}</h2>
                <p>Phone: {result.phone}</p>
            </div>
        ))}

        </div>

    );
}

export default Users;