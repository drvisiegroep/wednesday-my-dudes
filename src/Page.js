import { useState } from "react";
import Schedule from "./Schedule";
import Presence from "./Presence";
import Timediff from "./Timediff";

const Page = () => {

    const [resourceType, setResourceType] = useState('timediff')

    return (

        <>
            <div>
                <button onClick={() => setResourceType('presence')}>Presence</button>
                <button onClick={() => setResourceType('schedule')}>Schedule</button>
                <button onClick={() => setResourceType('timediff')}>Timediff</button>
            </div>
            
            <h1>{resourceType}</h1>

            {resourceType === 'schedule' && <Schedule  />}
            {resourceType === 'presence' && <Presence  />}
            {resourceType === 'timediff' && <Timediff  />}

        </>

    )
}

export default Page