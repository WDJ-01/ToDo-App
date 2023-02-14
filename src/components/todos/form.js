import React, { useState } from "react";
import "./todo.css";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/categorySlice";
import { useSelector } from "react-redux";

export const Form = () => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");

  const activeCategory = useSelector((state) => state.categoryList);
  const target = activeCategory.find((item) => item.active === true);

  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(categoryActions.addTodo({ textarea, input, target }));
  };
  const addTodoDisplay = () => {
    dispatch(categoryActions.addTodoDisplay({target}));
  };


  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onTextareaChange = (event) => {
    setTextarea(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addTodo({ textarea, input, target });
    addTodoDisplay({target})
    setInput("");
    setTextarea('')
  };

  return (
    <div className="todo_form">
      <form onSubmit={onFormSubmit}>
        <input
          className="todo_input"
          type="text"
          placeholder="Add Todo"
          value={input}
          required
          onChange={onInputChange}
        />
        <textarea
        className="todo_description"
          placeholder="Add todo notes"
          type='text'
          value={textarea}

          onChange={onTextareaChange}
        />

        <button className="todoForm_btn" type="submit">
          <h1>Create Todo</h1>
        </button>
      </form>
    </div>
  );
};
