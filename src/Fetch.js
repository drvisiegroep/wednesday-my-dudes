import React, {useState, useEffect } from 'react'
import Schedule from './Schedule';
import Presence from './Presence';
import Barpage from './Barpage';

export function FetchUserData() {
    const [resourceType, setResourceType] = useState('schedule');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`https://aanmelden.visie-groep.nl/${resourceType}.php`)
            .then(response => response.json())
            .then(response => setResult(response))
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [resourceType])

    if (loading) {
        console.log(`loading...`)
        return <p>De data wordt geladen...</p>;
    }

    return (

        <>
            <Barpage />
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
   