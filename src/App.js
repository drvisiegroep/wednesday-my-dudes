import React, {useState, useEffect} from "react";
import './index.css';

function FetchUserComponent() {
  const [ myFetchedList, setMyFetchedList] = useState([]);
  
  useEffect(() => {
    fetchData();
  },[]);

  
  function fetchData(){
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
            setMyFetchedList(result);
        });

  }

  return (
      <div className="ComponentContainer">
        <h4>Deze component haalt lijst met alle users op. Iedere user wordt vervolgens
          doorgegeven aan een userListItemComponent 
        </h4>
        {myFetchedList.map((item) => <UserListItemComponent userProp={item}> 
          </UserListItemComponent>
        )}
      </div>
  );
}

function UserListItemComponent(props) {
  const [ myFetchedUser, setMyFetchedUser] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  
  function fetchData(){
    const url = `https://jsonplaceholder.typicode.com/users/${props.userProp.id}`;
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
          console.log(result);
            setMyFetchedUser(result);
        });

  }
  
  return (
    <div className="ComponentContainer" >
        <h4>UserListItemComponent haalt voor iedere user ID de bijbehorende  haalt lijst met alle users op en geeft die door 
          aan de userListItemComponent
        </h4>
        <p>{myFetchedUser.name}</p> 
        <p>{myFetchedUser.website}</p> 
        <p>{myFetchedUser.phone}</p> 
    </div>
  )
}
  
  
 

function App() {
  return (
    <div className="App ComponentContainer">
      <h4>App component</h4>
       <FetchUserComponent />  
    </div>
  );
}


export default App;
