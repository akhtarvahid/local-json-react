import React, {useState, useEffect} from "react";
import axios from "axios";
import "../App.scss";


// 1st way - from json file inside src
import userData from "../local-json/users.json";

// 3rd way - from js file inside src
import { booksArray } from "../utils/books";

export default function App() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    setUsers(userData);
    setBooks(booksArray);


    //2nd way
    axios
    .get("./data.json")
    .then((res) => setAlbums(res.data))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className="App">
      <h1>Fetched from local</h1>
      <div className="title-text"><strong>users</strong>(<i>JSON data from json file inside src</i>)</div>
      {users &&
        users?.map(({ name, id }) => (
          <div key={id} className="list-row">
            <strong>{name}</strong>
          </div>
        ))}
        <hr />
        <div className="title-text"><strong>books</strong> (<i>JSON data from js file inside src</i>)</div>
        {books &&
        books?.map(({ title, id }) => (
          <div key={id} className="list-row">
            <strong>{title}</strong>
          </div>
        ))}
        <hr />
        <div className="title-text"><strong>albums</strong> (<i>JSON file using react API call(fetch, axios)</i>)</div>
        {albums &&
        albums?.map(({ title, userId }) => (
          <div key={userId} className="list-row">
            <strong>{title}</strong>
          </div>
        ))}
    </div>
  );
}