import React, {useState, useEffect } from 'react'
import Users from './Users';
import Posts from './Posts';

export function FetchUserData() {
    const [resourceType, setResourceType] = useState('users');
    const [result, setResult] = useState([]);


    useEffect(() => {
        
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(response => setResult(response))

    }, [resourceType])

    return (

        <>

            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setResourceType('todos')}>Todos</button>
                <button onClick={() => setResourceType('photos')}>Photos</button>
            </div>
            
            <h1>{resourceType}</h1>
            {result && resourceType === 'users' && <Users results={result} />}
            {result && resourceType === 'posts' && <Posts results={result} />}

        </>

    )

}
   