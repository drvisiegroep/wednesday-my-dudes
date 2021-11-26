import { useEffect, useState } from "react";
import { fullDayNameDutch, shortDate } from "./DateHandlers";

const RegistrationPagination = ({ array }) => {

    //reset currentpage on user switch
    const data = array
    useEffect(() => {
        setCurrentPage(1)
    }, [data])

    // Huidige Pagina
    const [currentPage, setCurrentPage] = useState(1)

    // Maximaal aantal items op 1 pagina
    const itemsPerPage = 1
    
    // Aantal items in de lijst
    const numberOfItems = array && array.length

    // Totaal aantal paginas is totaal aantal items gedeeld door aantal items per pagina
    const numberOfPages = Math.ceil(numberOfItems / itemsPerPage)


    // Van voor naar...
    const changePage = (direction) => {

        if (direction === 'Vorige') {
         setCurrentPage((prev) => prev - 1);
        } else if (direction === 'Volgende') {
         setCurrentPage((prev) => prev + 1);
        }

    }

    // todo - currentpage moet teruggezet worden naar 1 als er andere data binnenkomt.
    // todo - pagina logica klopt niet (waarschijnlijk omdat ik maar 1 item per pagina gebruik. Math hard...)
    return (

        <>
            <div className="registratie">
                <h2>Uren Registratie</h2>
                {array && array.slice((currentPage * itemsPerPage) - itemsPerPage, currentPage * itemsPerPage).map((reg1) => {
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
                    <div className="paginering-rest">{numberOfPages - currentPage + 1}</div>
                    {numberOfItems - 1 > (currentPage - 1) * itemsPerPage ? <button onClick={() => changePage('Volgende')}>Volgende</button> : <button disabled>Vorige</button> }
                </div>

            </div>   
        </>  
    )


}

export default RegistrationPagination


