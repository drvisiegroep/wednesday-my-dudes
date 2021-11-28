import React, {useState, } from 'react';
import Person from './Person';
import useFetch from './Utils/useFetch';
import { scheduleUrl } from './Utils/ApiUrls';
import './css/schedule.css'
import { shortDate } from './Utils/DateHandlers';

const Schedule = () => {


    // eslint-disable-next-line no-unused-vars
    const { error, isPending, data: schedule } = useFetch(scheduleUrl())
    
    // UserID geven we mee als prop naar Person.js
    const [userid, setUserid] = useState('29');


    // https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442
    function useForceUpdate(){
        const [, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }
    const forceUpdate = useForceUpdate();


    // todo reverse sort
    // Sorteren op ID 
    const sortID = () => {
        schedule.sort(function(a, b) {
            //todo
            return a.user_id - b.user_id
        })  	
    }


    // Styling 
    const tableWidth = {
        width: "60%",
        margin: "0 auto"
    }

    const tableRowHeading = {
        backgroundColor: "#f1f1f1",
        height: "40px",
        fontFamily: "Arial"
    }

    const btnWidth = {
        minWidth: "40px"
    }


    if(isPending) {
        <p>Loading...</p>
    }
    if(error) {
        <p>Foutje bedankt: {error}</p>
    }

    return (
        <>
            <div className="schedule-list">
                <table style={tableWidth}>
                    <thead>
                        <tr style={tableRowHeading}>
                            <th>ID</th>
                            <th>Naam</th>
                            <th><button style={btnWidth} onClick={() => {sortID();forceUpdate()}}>ID</button></th>
                            <th>Afdeling</th>
                            <th>Maandag</th>
                            <th>Dinsdag</th>
                            <th>Woensdag</th>
                            <th>Donderdag</th>
                            <th>Vrijdag</th>
                        </tr>
                    </thead>
                    <tbody>

                    {schedule && schedule.map((item, itemindex) => {
                        return (
                            
                            <tr key={itemindex}>
                                <button style={btnWidth} onClick={() => setUserid(`${item.user_id}`)}>{item.user_id}</button>
                                <td>{item.first_name} {item.last_name}</td>
                                <td>{item.user_id}</td>
                                <td>{item.department}</td>
                                
                                {item.monday_from === null ? <td></td> : <td>{shortDate(item.monday_from,0,5)} - {shortDate(item.monday_to,0,5)}</td>}
                                {item.tuesday_from === null ? <td></td> : <td>{shortDate(item.tuesday_from,0,5)} - {shortDate(item.tuesday_to,0,5)}</td>}
                                {item.wednesday_from === null ? <td></td> : <td>{shortDate(item.wednesday_from,0,5)} - {shortDate(item.wednesday_to,0,5)}</td>}
                                {item.thursday_from === null ? <td></td> : <td>{shortDate(item.thursday_from,0,5)} - {shortDate(item.thursday_to,0,5)}</td>}
                                {item.friday_from === null ? <td></td> : <td>{shortDate(item.friday_from,0,5)} - {shortDate(item.friday_to,0,5)}</td>}

                            </tr>
                            
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <Person userid={userid} />

        </>
    );
    
}

export default Schedule;