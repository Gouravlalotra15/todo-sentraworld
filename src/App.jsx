import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div className="App">
      <Banner />
      <h1>Todo App</h1>
      <Todo />
    </div>
  );
};

export default App;
