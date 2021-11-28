import useFetch from './Utils/useFetch';
import { shortDate } from './Utils/DateHandlers';
import { personUrl } from './Utils/ApiUrls';
import RegistrationPagination from './Utils/RegistrationPagination';
import './css/person.css'


function Person({ userid }) {
    
    // eslint-disable-next-line no-unused-vars
    const { error, isPending, data: person } = useFetch(personUrl(userid))
    
    if(isPending) {
        <p>Loading...</p>
    }
    if(error) {
        <p>Foutje bedankt: {error}</p>
    }

    return (

        <>

            <div className="dossier">
                <div className="algemene-info">
                    {/* <h1>Algemene informatie</h1> */}
                    <h2>{person.first_name} {person.last_name}</h2>
                    <div>
                        <p>Geboortedatum: {person.date_of_birth}</p>
                        <p>Rol: {person.role}</p>
                        <p>Op tijd: {person.arrive_on_time_target}</p>
                        <p>Medische informatie: {person.medical_info}</p>
                        <p>Begeleider: {person.personal_coach}</p>
                    </div>
                </div>

                <div className="planning">
                    <h2>Planning</h2>
                    {person.schedule && person.schedule.map((schdl, schdlkey) => {
                        return(
                            <div key={schdlkey}>
                                <p>Afdeling: {schdl.department}</p>
                                {schdl.monday_from === null ? <p>Maandag: Niet aanwezig</p> : <p>Maandag {shortDate(schdl.monday_from, 0,5)} tot {shortDate(schdl.monday_to, 0,5)}</p>}
                                {schdl.tuesday_from === null ? <p>Dinsdag: Niet aanwezig</p> : <p>Dinsdag {shortDate(schdl.tuesday_from, 0,5)} tot {shortDate(schdl.tuesday_to, 0,5)}</p>}
                                {schdl.wednesday_from === null ? <p>Woensdag: Niet aanwezig</p> : <p>Woensdag {shortDate(schdl.wednesday_from, 0,5)} tot {shortDate(schdl.wednesday_to, 0,5)}</p>}
                                {schdl.thursday_from === null ? <p>Donderdag: Niet aanwezig</p> : <p>Donderdag {shortDate(schdl.thursday_from, 0,5)} tot {shortDate(schdl.thursday_to, 0,5)}</p>}
                                {schdl.friday_from === null ? <p>Vrijdag: Niet aanwezig</p> : <p>Vrijdag {shortDate(schdl.friday_from, 0,5)} tot {shortDate(schdl.friday_to, 0,5)}</p>}
                            </div>
                        )
                    })}
                </div>

                <RegistrationPagination array={person.registrations} />

            </div>
        </>
    )
    
}

export default Person