const Posts = ({ results }) => {
    return (

        <div className="post-list">

        {results.map(result => (
            <div className="post" key={result.id} >
                <h2>Title: {result.title}</h2>
                <p>Message: {result.body}</p>
            </div>
        ))}

        </div>

    );
}

export default Posts;