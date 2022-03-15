import React, { useEffect, useState } from "react";

function TodoList() {
  //initial state
  const [todos, setTodos] = useState([]);
  //search functionality

  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      //fetching
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      //json form
      const json = await res.json();
      setTodos(json);
      console.log(json);
    };
    fetchTodos();
  }, []); //to render only once

  //to render the data
  let filteredTodos= todos.filter(({title})=>{
      return title.indexOf(term)>=0
  }).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
      <div>
        <h2>Todos</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />

      <div>{filteredTodos}</div>
    </div>
  );
}

export default TodoList;
