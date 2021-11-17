import React, {useState, useEffect } from 'react'
import Schedule from './Schedule';
import Presence from './Presence';


export function FetchUserData() {
    const [resourceType, setResourceType] = useState('schedule');
    const [result, setResult] = useState([]);
    // const userIdUrl = 'https://aanmelden.visie-groep.nl/person.php?id=';

    useEffect(() => {
        
        fetch(`https://aanmelden.visie-groep.nl/${resourceType}.php`)
        .then(response => response.json())
        .then(response => setResult(response))

    }, [resourceType])

    return (

        <>

            <div>
                <button onClick={() => setResourceType('presence')}>Presence</button>
                <button onClick={() => setResourceType('schedule')}>Schedule</button>

            </div>
            
            <h1>{resourceType}</h1>
            {result && resourceType === 'schedule' && <Schedule results={result}  />}
            {result && resourceType === 'presence' && <Presence results={result}  />}

        </>

    )

}
   