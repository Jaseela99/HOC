import React from "react";

import "./App.css";
import TodoList from "./TodoList";
import SearchUsers from "./UserLIst";
function App() {
  return (
    <div className="App">
      <h2>Higherorder components</h2>

      <div className="list">
        <div>
          <SearchUsers />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
