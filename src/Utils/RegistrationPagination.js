import { useState } from "react";
import { fullDayNameDutch, shortDate } from "./DateHandlers";

const RegistrationPagination = ({ array }) => {

    // Huidige Pagina
    const [currentPage, setCurrentPage] = useState(1)

    // Maximaal aantal items op 1 pagina
    const maxItemsPerPage = 1

    // Van voor naar
    const changePage = (direction) => {
        if (direction === 'Vorige') {
         setCurrentPage((prev) => prev - 1);
        } else if (direction === 'Volgende') {
         setCurrentPage((prev) => prev + 1);
        }
    }

    return (

        <>
            <div className="registratie">
                <h2>Uren Registratie</h2>
                {array && array.slice((currentPage * maxItemsPerPage) - maxItemsPerPage, currentPage * maxItemsPerPage).map((reg1) => {
                    return (
                        
                        <div className="dag-registratie">
                            <p>Dag: {fullDayNameDutch(reg1.signed_in)}</p>
                            <p>Datum: {shortDate(reg1.signed_in, 0,10)}</p>
                            <p>Signed in: {shortDate(reg1.signed_in, 10,16)}</p>
                            <p>Signed off: {shortDate(reg1.signed_off, 10,16)}</p>
                            <p>Auto-uitgelogd: {reg1.signed_auto_signed_off}</p>
                        </div>
                        
                        
                    )
                })}
            


                <div className="registratie-paginering">
                    {currentPage > 1 ? <button onClick={() => changePage('Vorige')}>Vorige</button> : <button disabled>Vorige</button>}
                    {array && array.length - 1 > (currentPage - 1) * maxItemsPerPage ? <button onClick={() => changePage('Volgende')}>Volgende</button> : <button disabled>Vorige</button> }
                </div>
            </div>   
        </>  
    )


}

export default RegistrationPagination


