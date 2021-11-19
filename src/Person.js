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

    // Checken of de data is geladen vanuit de api.
    if (loading) {
        console.log(`loading...`)
        return <p>De data wordt geladen...</p>;
      }

    // Checken of de json klaar is voor gebruik. Checken op alleen person werkt niet, blijkbaar is de dom dan nog niet geladen o.i.d.
    // Betere oplossing voor zoeken, maar dit werkt voor nu.
    if(typeof person.schedule === 'undefined' || typeof person.registrations === 'undefined') {
        console.log(`Undefined...`)
        return <p>Er was een foutje met het ophalen van de data...</p>
    }
    return (

        <>
            <div className="dossier">
                
                <h1>Algemene informatie</h1>
                <h2>{person.first_name} {person.last_name}</h2>
                <p>Geboortedatum: {person.date_of_birth}</p>
                <p>Rol: {person.role}</p>
                <p>Op tijd: {person.arrive_on_time_target}</p>
                <p>Medische informatie: {person.medical_info}</p>
                <p>Begeleider: {person.personal_coach}</p>
                

                <h2>Schedule</h2>
                {person.schedule.map((schdl, schdlkey) => {
                    return(
                        <div key={schdlkey}>
                            <p>Afdeling: {schdl.department}</p>
                            {schdl.monday_from === null ? <p>Maandag: Niet aanwezig</p> : <p>Maandag {schdl.monday_from.substring(0,5)} tot {schdl.monday_to.substring(0,5)}</p>}
                            {schdl.tuesday_from === null ? <p>Dinsdag: Niet aanwezig</p> : <p>Dinsdag {schdl.tuesday_from.substring(0,5)} tot {schdl.tuesday_to.substring(0,5)}</p>}
                            {schdl.wednesday_from === null ? <p>Woensdag: Niet aanwezig</p> : <p>Woensdag {schdl.wednesday_from.substring(0,5)} tot {schdl.wednesday_to.substring(0,5)}</p>}
                            {schdl.thursday_from === null ? <p>Donderdag: Niet aanwezig</p> : <p>Donderdag {schdl.thursday_from.substring(0,5)} tot {schdl.thursday_to.substring(0,5)}</p>}
                            {schdl.friday_from === null ? <p>Vrijdag: Niet aanwezig</p> : <p>Vrijdag {schdl.friday_from.substring(0,5)} tot {schdl.friday_to.substring(0,5)}</p>}
                        </div>
                    )
                })}


                <h2>Aanmeldingen</h2>
                {person.registrations.map((reg, regkey) => {
                    return(
                        <div key={regkey}>
                        <p>Datum: {reg.signed_in.substring(0,10)}</p>
                        <p>Signed in: {reg.signed_in.substring(10,16)}</p>
                        <p>Signed off: {reg.signed_off.substring(10,16)}</p>
                        <p>Auto-uitgelogd: {reg.signed_auto_signed_off}</p>
                        <p>---</p>
                        </div>
                    )
                })}

            </div>
        </>
    )
    
}

export default Person