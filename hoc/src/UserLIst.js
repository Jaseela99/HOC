import React, { useEffect, useState } from "react";
import Hoc from "./Hoc";

function UserLIst({data}) {
  /* //initial state
  const [users, setUsers] = useState([]);
  //search functionality

  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      //fetching
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      //json form
      const json = await res.json();
      setUsers(json);
      console.log(json);
    };
    fetchUsers();
  }, []); //to render only once
 */
  //to render the data

  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  /* let filteredUsers = users.filter(({name})=>{
      return name.indexOf(term)>=0
  }).map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  }); */
  return (
      <div>
      {/*   <h2>users</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      /> */}

      <div>{renderUsers}</div>
    </div>
  );
}
const searchUsers =Hoc(UserLIst,"users")
export default searchUsers
