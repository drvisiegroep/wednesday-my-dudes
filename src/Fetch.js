

export function FetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => console.log(json))
    
        return(
            <p>bla bla</p>
        )
}
   