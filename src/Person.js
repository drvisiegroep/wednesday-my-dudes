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
        console.log(`Undefined`)
        return <p>Problem collecting the data (Undefined)</p>
    }
    return (

        <>
            
                    <div>
                        
                        <h1>{person.first_name} {person.last_name}</h1>
                        <p>Geboortedatum: {person.date_of_birth}</p>
                        <p>Rol: {person.role}</p>
                        <p>Op tijd: {person.arrive_on_time_target}</p>
                        <p>Medische informatie: {person.medical_info}</p>
                        <p>Begeleider: {person.personal_coach}</p>
                        

                        <h2>Schedule</h2>
                        {person.schedule.map(schdl => {
                            return(
                                <div>
                                    <p>Afedling: {schdl.department}</p>
                                    <p>Maandag {schdl.monday_from} tot {schdl.monday_to}</p>
                                    <p>Dinsdag: {schdl.tuesday_from} tot {schdl.tuesday_to}</p>
                                    <p>Woensdag: {schdl.wednesday_from} tot {schdl.wednesday_to}</p>
                                    <p>Donderdag: {schdl.thursday_from} tot {schdl.thursday_to}</p>
                                    <p>Vrijdag: {schdl.friday_from} tot {schdl.friday_to}</p>
                                </div>
                            )
                        })}


                        <h2>Aanmeldingen</h2>
                        {person.registrations.map(item => {
                           
                           return(
                               <div>
                                <p>Signed in: {item.signed_in}</p>
                                <p>Signed off: {item.signed_off}</p>
                                <p>Automatisch: {item.signed_auto_signed_off}</p>
                                <p>---</p>
                               </div>
                           )
                        })}
                   </div>
                
        </>
    )
    
}

export default Person