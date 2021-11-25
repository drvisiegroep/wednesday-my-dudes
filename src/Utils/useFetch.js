import  {useState, useEffect } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })

            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json();
            })

            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })

            .catch(err => {
                // Don't update state if error comes from Abortcontroller 
                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();

    }, [url])
    
    return { data, isPending, error };
}
      
export default useFetch;