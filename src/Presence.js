const Presence = ({ results }) => {

    return (
        
        <div className="presence-list">
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>ID</th>
                        <th>Afdeling</th>
                        <th>Signed on / Signed off</th>

                    </tr>
                </thead>
                <tbody>

        {results.map((item, index) => {
            return (
                
                    <tr key={index}>
                        <td>{item.first_name} {item.last_name}</td>
                        <td>{item.user_id}</td>
                        <td>{item.department}</td>
                        <td>{item.signed_in} - {item.signed_off}</td>
                    </tr>
                
            )
        })}
                </tbody>
            </table>
        </div>
        
    );
}

export default Presence