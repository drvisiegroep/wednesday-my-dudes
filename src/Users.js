
export default function Users(props) {

    return (


        <div>
        <h1>{props.userid}</h1>
        <p>{props.name}</p>
        <p>{props.username}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.website}</p>
        <p>{props.company}</p>
        </div>
    )
}