import React, {useState, } from 'react';
import Person from './Person';


const Schedule = ({ results }) => {
    
    // const dataHandler = (obj, fn) => {
    //     const values = Object.values(obj)
    
    //     values.forEach((val) => 
    //         val && typeof val === "object" ? dataHandler(val, fn) : fn(val))
    // }
    
    // const print = (val) => console.log(val)
        
    // dataHandler(results, print)
    // const sortID = () => {
    //     results.sort(function(a, b) {
    //         return a.user_id - b.user_id
    //     })  	
    // }

    // const [sortedField, setSortedField] = useState(null);



    const [userid, setUserid] = useState('1');
    
    return (
        <>
        <div className="schedule-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Naam</th>
                        <th>ID</th>
                        <th>Afdeling</th>
                        <th>Maandag</th>
                        <th>Dinsdag</th>
                        <th>Woensdag</th>
                        <th>Donderdag</th>
                        <th>Vrijdag</th>
                    </tr>
                </thead>
                <tbody>

        {results.map((item, index) => {
            return (
                
                    <tr key={index}>
                        <button onClick={() => setUserid(`${item.user_id}`)}>{item.user_id}</button>
                        <td>{item.first_name} {item.last_name}</td>
                        <td>{item.user_id}</td>
                        <td>{item.department}</td>
                        <td>{item.monday_from} - {item.monday_to}</td>
                        <td>{item.tuesday_from} - {item.tuesday_to}</td>
                        <td>{item.wednesday_from} - {item.wednesday_to}</td>
                        <td>{item.thursday_from} - {item.thursday_to}</td>
                        <td>{item.friday_from} - {item.friday_to}</td>
                    </tr>
                
            )
        })}
                </tbody>
            </table>
        </div>


                {console.log('bla', userid)}
            <Person userid={userid} />
        </>
    );
    
}

export default Schedule;