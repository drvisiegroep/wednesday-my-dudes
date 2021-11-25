import { useState } from "react";
import Schedule from "./Schedule";
import Presence from "./Presence";

const Page = () => {

    const [resourceType, setResourceType] = useState('schedule')

    return (

        <>
            <div>
                <button onClick={() => setResourceType('presence')}>Presence</button>
                <button onClick={() => setResourceType('schedule')}>Schedule</button>
            </div>
            
            <h1>{resourceType}</h1>

            {resourceType === 'schedule' && <Schedule  />}
            {resourceType === 'presence' && <Presence  />}

        </>

    )
}

export default Page