import React from "react"

// Datum afronden met substring opties
export const shortDate = (date, substring1, substring2) => {
    return date.substring(substring1, substring2)
}

// Datum naar naam van de dag in het Nederlands converteren
export const fullDayNameDutch = (date) => {
    const regday = new Date(date)
    return regday.toLocaleDateString("nl-NL", { weekday: 'long' })
}

const DateHandlers = () => {
    return (
        <>

        </>
    )
}

export default DateHandlers