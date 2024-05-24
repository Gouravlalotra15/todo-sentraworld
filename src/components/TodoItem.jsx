import React, { useState } from "react";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import STATICS from "../constants";

const TodoItem = ({
  todo,
  idx,
  editTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
}) => {
  const { text, isEditing } = todo;
  const [updateTodoInput, setUpdateTodoInput] = useState("");

  const onKeyDownHandler = (e) => {
    if (e.key.toLowerCase() === "enter")
      updateTodoHandler(idx, updateTodoInput);
  };

  return (
    <div className="todoItem">
      {isEditing ? (
        <input
          type="text"
          onKeyDown={onKeyDownHandler}
          value={updateTodoInput}
          placeholder={STATICS.PLACEHOLDER_MESSAGE}
          onChange={(e) => setUpdateTodoInput(e.target.value)}
        />
      ) : (
        <h4>{text}</h4>
      )}
      <div className="actionsBtnCtr">
        {isEditing ? (
          <button
            className="btn"
            onClick={() => updateTodoHandler(idx, updateTodoInput)}
          >
            <MdSave />
          </button>
        ) : (
          <button className="btn" onClick={() => editTodoHandler(idx)}>
            <MdEdit />
          </button>
        )}
        <button className="btn" onClick={() => deleteTodoHandler(idx)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
