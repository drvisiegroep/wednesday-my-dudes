const useTimeConvert = (planningStart, planningEnd, signedInTime, signedOffTime) => {

    // https://stackoverflow.com/questions/10804042/calculate-time-difference-with-javascript

    // Datum iets kleiner maken voor makkelijker rekenen
    const shortDate = (date, substring1, substring2) => {
        if (date) {
            return date.substring(substring1, substring2)
        } else {
            return <p>Probleem in useTimeConvert</p>
        }
    }

    // begin en eind van zowel de planning als de inlog tijd
    // Daar maken we een 24h notatie van met substring
    // Die we vervolgens splitten in 2 stukken, uren en minuten
    // ps = planning start, si = signin, etc.
    const ps = shortDate(planningStart,0,5).split(':');
    const pe = shortDate(planningEnd,0,5).split(':');
    const si = shortDate(signedInTime,11,16).split(':');
    const so = shortDate(signedOffTime,11,16).split(':');

    // Nu gaan we er tijd van maken, zodat we er straks mee kunnen rekenen
    const psdate = new Date(0,0,0, ps[0], ps[1], 0);
    const pedate = new Date(0,0,0, pe[0], pe[1], 0);
    const sidate = new Date(0,0,0, si[0], si[1], 0);
    const sodate = new Date(0,0,0, so[0], so[1], 0);

    let psdiff = sidate.getTime() - psdate.getTime();
    let pediff = sodate.getTime() - pedate.getTime();

    const diffCalc = (difftime) => {

        let hours = Math.floor(difftime / 1000 / 60 / 60);
        difftime -= hours * 1000 * 60 * 60
        let minutes = Math.floor(difftime / 1000 / 60);

            if (hours < 0) {
            hours = hours + 24;
            }

        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }








    


















}

export default useTimeConvert