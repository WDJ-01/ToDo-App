import React from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/categorySlice";
import { MdRemoveCircleOutline } from "react-icons/md";
import "./category.css";
import { useSelector } from "react-redux";

export const CategoryCard = ({ id, title, active }) => {
  const dispatch = useDispatch();
  const removeCategory = () => {
    dispatch(categoryActions.removeCategory({ id }));
  };
  const changeActiveToTrue = () => {
    dispatch(categoryActions.changeActiveToTrue({ id }));
  };
  const clearTodoToDisplay = () => {
    dispatch(categoryActions.clearTodoToDisplay());
  };
  const addTodoToDisplay = () => {
    dispatch(categoryActions.addTodoToDisplay({ title }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    clearTodoToDisplay();

    changeActiveToTrue({ id });
    addTodoToDisplay({ title });
  };

  const style1 = { backgroundColor: "white" };
  const style2 = { backgroundColor: "rgb(137, 137, 255)", color: "white" };

  return (
    <>
      <div
        className="category_box"
        style={active ? style2 : style1}
        onClick={handleClick}
      >
        
        <div className="category_remove">
          <button onClick={removeCategory}>
            <MdRemoveCircleOutline
              className="remove_circle"
              style={{ color: "black", fontSize: "1.5rem" }}
            />
          </button>
        </div>
        <div className="category_title">
          <h1 contentEditable='true' >{title}</h1>
        </div>

      </div>
    </>
  );
};
