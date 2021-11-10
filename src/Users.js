
export default function Users(props) {

    return (


        <div key={props.userid}> 
        <h1>{props.userid}</h1>
        <h1>{props.name}</h1>
        <p>{props.username}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.website}</p>
        <p>{props.company}</p>
        </div>
    )
}