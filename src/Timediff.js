import { presenceUrl, scheduleUrl } from "./Utils/ApiUrls"
import useFetch from "./Utils/useFetch"
import useTimeConvert from "./Utils/useTimeConvert"


const Timediff = () => {

    const { error: schederror, isPending: schedispending, data: schedule } = useFetch(scheduleUrl())
    const { error: preserror, isPending: presispending, data: presence } = useFetch(presenceUrl())

    const planstart = '13:00:00';
    const planend = '17:00:00';
    const signstart = '2021-11-22 14:53:16';
    const signend = '2021-11-22 17:38:59';

    


    if(schedispending || presispending) {
        <p>Loading...</p>
    }
    if(schederror || preserror) {
        <p>Foutje bedankt: {schederror} - {preserror}</p>
    }

    return (
        <>
            {useTimeConvert(planstart,planend,signstart,signend)}

        </>
    )


}

export default Timediff