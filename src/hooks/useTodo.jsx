import { useState } from "react";

import data from "../data";

const useTodo = () => {
  const [todos, setTodos] = useState(data);
  const [inputTodo, setInputTodo] = useState("");
  const isShowTodosList = todos.length > 0;

  // helper functions for CRUD operations
  const createTodoHandler = () => {
    if (inputTodo.length === 0) return;

    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      isEditing: false,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputTodo("");
  };

  const onKeyDownHandler = (e) => {
    if (e.key.toLowerCase() === "enter") createTodoHandler();
  };

  const onChangeHandler = (e) => {
    setInputTodo(e.target.value);
  };

  const editTodoHandler = (idx) => {
    const newTodos = [...todos];
    newTodos[idx].isEditing = true;
    setTodos(newTodos);
  };

  const updateTodoHandler = (idx, updateTodoInput) => {
    if (updateTodoHandler.length === 0) return;
    const newTodos = [...todos];

    newTodos[idx].text = updateTodoInput;
    newTodos[idx].isEditing = false;
    setTodos(newTodos);
  };

  const deleteTodoHandler = (idx) => {
    const newTodos = todos.filter((ele, index) => {
      return index !== idx;
    });
    setTodos(newTodos);
  };

  return {
    todos,
    inputTodo,
    isShowTodosList,
    editTodoHandler,
    onChangeHandler,
    onKeyDownHandler,
    updateTodoHandler,
    createTodoHandler,
    deleteTodoHandler,
  };
};

export default useTodo;
