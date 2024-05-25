import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import useTodo from "../hooks/useTodo";
import { MdAddCircle } from "react-icons/md";
import STATICS from "../constants";

const Todo = () => {
  const {
    todos,
    inputTodo,
    isShowTodosList,
    deleteTodoHandler,
    updateTodoHandler,
    editTodoHandler,
    onChangeHandler,
    onKeyDownHandler,
    createTodoHandler,
    cancelEditHandler,
  } = useTodo();

  return (
    <div className="todos">
      <div className="inputTodoCtr">
        <input
          type="text"
          value={inputTodo}
          onChange={onChangeHandler}
          placeholder={STATICS.ADD_TODO}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={createTodoHandler} className="btn addNoteBtn">
          <MdAddCircle />
        </button>
      </div>
      {isShowTodosList ? (
        <div className="todosList">
          {todos.map((ele, idx) => {
            return (
              <TodoItem
                key={ele.id}
                todo={ele}
                idx={idx}
                editTodoHandler={editTodoHandler}
                updateTodoHandler={updateTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
                cancelEditHandler={cancelEditHandler}
              />
            );
          })}
        </div>
      ) : (
        <p>{STATICS.EMPTY_TODOS_MESSAGE}</p>
      )}
    </div>
  );
};

export default Todo;
