import React, { useState } from "react";
import "./category.css";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/categorySlice";

export const Form = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const addCategory = () => {
    dispatch(categoryActions.addCategory({ input }));
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addCategory(input);
    setInput("");
  };

  return (
    <div className="category_form">
      <form onSubmit={onFormSubmit}>
        <input
          className="category_input"
          type="text"
          placeholder="Add Category"
          value={input}
          required
          onChange={onInputChange}
          maxLength='15'
        />
        {/* <button className="form_btn" type="submit">
          <MdAddCircleOutline style={{ color: "green", fontSize: "1.5rem" }} />
        </button> */}
      </form>
    </div>
  );
};
