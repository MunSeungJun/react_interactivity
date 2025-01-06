import React, { useState } from "react";
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('')
  const getUsers = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setLoading(false);
          setUsers(json);
        }, 3000);
      });
  };
  getUsers();
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    const foundUser = users.filter(user => user.name === search)
    setUsers([...foundUser])
  }
  return (
    <div>
      <header>
        <input value={search} onChange={handleChange} />{' '}
        <button onClick={handleClick}>검색</button>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => {
          return <li key={user.id}>{user.name} {user.email}</li>;
        })
      )}
    </div>
  );
}

export default App;
