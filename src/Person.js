import React, {useState, useEffect } from 'react';
import Iterate from './Iterate';

function Person({ userid }) {

    const [person, setPerson] = useState([]);

    useEffect(() => {

        fetch(`https://aanmelden.visie-groep.nl/person.php?id=${userid}`)
            .then(response => response.json())
            .then(response => setPerson(response));

    }, [userid]);

    return (
        <>
            test {userid}
            <Iterate person={person} />
        </>
    );
}

export default Person