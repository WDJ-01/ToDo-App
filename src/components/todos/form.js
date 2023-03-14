import React, { useState } from "react";
import "./todo.css";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/categorySlice";
import { useSelector } from "react-redux";
import { GrClose, GrAdd } from "react-icons/gr";
export const Form = ({ showForm, onClick }) => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");

  const activeCategory = useSelector((state) => state.categoryList);
  const target = activeCategory.find((item) => item.active === true);

  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(categoryActions.addTodo({ textarea, input, target }));
  };
  const addTodoDisplay = () => {
    dispatch(categoryActions.addTodoDisplay({ target }));
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
    addTodoDisplay({ target });
    setInput("");
    setTextarea("");
  };

  const style1 = { visibility: "visible" };
  const style2 = { visibility: "hidden" };

  return (
    <div className="todo_form" style={showForm ? style1 : style2}>
      <div className="close_btn">
        <button onClick={onClick}>
          <GrClose />
          Close
        </button>
      </div>
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
          type="text"
          value={textarea}
          onChange={onTextareaChange}
        />

        <button className="todoForm_btn" type="submit">
          <GrAdd />

          <h1>Create Todo</h1>
        </button>
      </form>
    </div>
  );
};
export default Form;
