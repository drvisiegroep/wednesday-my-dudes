import React, {useState, } from 'react';
import Person from './Person';



const Schedule = ({ results }) => {
    
    // https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442
    function useForceUpdate(){
        const [, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }

    // const dataHandler = (obj, fn) => {
    //     const values = Object.values(obj)
    
    //     values.forEach((val) => 
    //         val && typeof val === "object" ? dataHandler(val, fn) : fn(val))
    // }
    
    // const print = (val) => console.log(val)
        
    // dataHandler(results, print)

    const forceUpdate = useForceUpdate();

    // Sorteren op ID 
    const sortID = () => {
        results.sort(function(a, b) {
            return a.user_id - b.user_id
        })  	
    }

    const [userid, setUserid] = useState('1');
    const tableHeading = {
        backgroundColor: "#f1f1f1"
    }
    const btnWidth = {
        minWidth: "40px"
    }


    return (
        <>
            <div className="schedule-list">
                <table>
                    <thead>
                        <tr style={tableHeading}>
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

                    {results.map((rslt, rsltindex) => {
                        return (
                            
                            <tr key={rsltindex}>
                                <button style={btnWidth} onClick={() => setUserid(`${rslt.user_id}`)}>{rslt.user_id}</button>
                                <td>{rslt.first_name} {rslt.last_name}</td>
                                <td>{rslt.user_id}</td>
                                <td>{rslt.department}</td>
                                {rslt.monday_from === null ? <td></td> : <td>{rslt.monday_from.substring(0,5).substring(0,5)} - {rslt.monday_to.substring(0,5)}</td>}
                                {rslt.tuesday_from === null ? <td></td> : <td>{rslt.tuesday_from.substring(0,5)} - {rslt.tuesday_to.substring(0,5)}</td>}
                                {rslt.wednesday_from === null ? <td></td> : <td>{rslt.wednesday_from.substring(0,5)} - {rslt.wednesday_to.substring(0,5)}</td>}
                                {rslt.thursday_from === null ? <td></td> : <td>{rslt.thursday_from.substring(0,5)} - {rslt.thursday_to.substring(0,5)}</td>}
                                {rslt.friday_from === null ? <td></td> : <td>{rslt.friday_from.substring(0,5)} - {rslt.friday_to.substring(0,5)}</td>}

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