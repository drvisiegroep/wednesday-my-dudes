import React, {useState, useEffect } from 'react';

function Person({ userid }) {

    const [person, setPerson] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`https://aanmelden.visie-groep.nl/person.php?id=${userid}`)
            .then(response => response.json())
            .then(response => setPerson(response))
            .catch(err => console.log(err))
            .finally(setLoading(false))

            
    }, [userid]);



    if (loading) {
        console.log(`loading`)
        return <p>Data is loading...</p>;
      }
    if(typeof person.schedule === 'undefined') {
        console.log(`Shit's undefined, yo!`)
        return <p> Shit's undefined, yo!</p>
    }
    return (



        <>
            
                
                    {/* ({(person && typeof person.schedule !== "undefined")} */}
                    <div>
                        <h1>{person.first_name} {person['last_name']}</h1>
                        <p>Geboortedatum: {person.date_of_birth}</p>
                        <p>Rol: {person.role}</p>
                        <p>Op tijd: {person.arrive_on_time_target}</p>
                        <p>Medische informatie: {person.medical_info}</p>
                        <p>Begeleider: {person.personal_coach}</p>
                        <p>---</p>
                        
                        <p>Afdeling: {person['schedule']['0']['department']}</p>
                        <p>Maandag {person.schedule[0].monday_from} tot {person.schedule[0].monday_to}</p>
                        <p>Dinsdag: {person.schedule[0].tuesday_from} tot {person.schedule[0].tuesday_to}</p>
                        <p>Woensdag: {person.schedule[0].wednesday_from} tot {person.schedule[0].wednesday_to}</p>
                        <p>Donderdag: {person.schedule[0].thursday_from} tot {person.schedule[0].thursday_to}</p>
                        <p>Vrijdag: {person.schedule[0].friday_from} tot {person.schedule[0].friday_to}</p>
                        <p>---</p>
                        

                   </div>
                
            
            
        </>
    )
    
}

export default Person