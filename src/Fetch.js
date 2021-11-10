export default function fetchData(){
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
            setMyFetchedList(result);
        });

  }
  return (
      <div className="ComponentContainer">
          <h3>Functie Component voor data fetchen</h3>
          
          <ul>{ myFetchedList.map((item) => 
              <li key={item.id}>{item.name}</li>
            )}
          </ul> 
          
      </div>
  );
          