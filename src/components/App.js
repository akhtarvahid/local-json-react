import React, {useState, useEffect} from "react";
import "../App.scss";

import axios from "axios";
//1st way
import userData from "../local-json/users.json";

// 3rd way
import { booksArray } from "../utils/books";

export default function App() {
  const [users, setUsers] = useState(userData);
  const [books, setBooks] = useState(booksArray);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    //2nd way
    axios
    .get("./data.json")
    .then((res) => setAlbums(res.data))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className="App">
      <h1>Fetched from local</h1>
      <h4>users</h4>
      {users &&
        users.map(({ name, id }) => (
          <div key={id} className="list-row">
            <strong>{name}</strong>
          </div>
        ))}
        <hr />
        <h4>books</h4>
        {books &&
        books.map(({ title, id }) => (
          <div key={id} className="list-row">
            <strong>{title}</strong>
          </div>
        ))}
        <hr />
        <h4>albums</h4>
        {albums &&
        albums.map(({ title, userId }) => (
          <div key={userId} className="list-row">
            <strong>{title}</strong>
          </div>
        ))}
    </div>
  );
}