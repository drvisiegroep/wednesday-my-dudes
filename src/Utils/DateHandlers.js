// Datum afronden met substring opties
export const shortDate = (date, substring1, substring2) => {
    if (date) {
        return date.substring(substring1, substring2)
    } else {
        return <p>Probleem in dateHandler</p>
    }
}

// Datum naar naam van de dag in het Nederlands converteren
export const fullDayNameDutch = (date) => {
    if (date) {
        const regday = new Date(date)
        return regday.toLocaleDateString("nl-NL", { weekday: 'long' })
    } else {
        return <p>Probleem in dateHandler</p>
    }
}