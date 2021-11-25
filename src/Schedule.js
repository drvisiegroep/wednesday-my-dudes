import React, {useState, } from 'react';
import Person from './Person';
import useFetch from './useFetch';
import { scheduleUrl } from './Utils/ApiUrls';

const Schedule = () => {


    // eslint-disable-next-line no-unused-vars
    const { error, isPending, data: schedule } = useFetch(scheduleUrl())
    

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


    // UserID geven we mee als prop naar Person.js
    const [userid, setUserid] = useState('1');

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
                                
                                {item.monday_from === null ? <td></td> : <td>{item.monday_from.substring(0,5)} - {item.monday_to.substring(0,5)}</td>}
                                {item.tuesday_from === null ? <td></td> : <td>{item.tuesday_from.substring(0,5)} - {item.tuesday_to.substring(0,5)}</td>}
                                {item.wednesday_from === null ? <td></td> : <td>{item.wednesday_from.substring(0,5)} - {item.wednesday_to.substring(0,5)}</td>}
                                {item.thursday_from === null ? <td></td> : <td>{item.thursday_from.substring(0,5)} - {item.thursday_to.substring(0,5)}</td>}
                                {item.friday_from === null ? <td></td> : <td>{item.friday_from.substring(0,5)} - {item.friday_to.substring(0,5)}</td>}

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