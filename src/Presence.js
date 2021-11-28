import useFetch from "./Utils/useFetch";
import { presenceUrl } from './Utils/ApiUrls';
import { shortDate } from "./Utils/DateHandlers";

const Presence = () => {

    // eslint-disable-next-line no-unused-vars
    const { error, isPending, data: presence } = useFetch(presenceUrl())

    if(isPending) {
        <p>Loading...</p>
    }
    if(error) {
        <p>Foutje bedankt: {error}</p>
    }

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

                    {presence.map((item, index) => {
                        return (
                            
                                <tr key={index}>
                                    <td>{item.first_name} {item.last_name}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.department}</td>
                                    <td>{shortDate(item.signed_in,11,16)} - {item.signed_off}</td>
                                </tr>
                            
                            )
                        })}

                </tbody>
            </table>
        </div>
        
    );
}

export default Presence