import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { categoryActions } from "../../store/categorySlice";
import { MdRemoveCircleOutline } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./todo.css";

export const TodoCard = ({ id, title, description, completed }) => {
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(categoryActions.removeTodo({ id }));
  };
  // const changeComplete = () => {
  //   dispatch(categoryActions.changeComplete({ id }));
  // };
  const handleClick = (e) => {
    e.preventDefault();
    setIsComplete(!isComplete);
  };

  return (
    <>
      <div className="todo_box">
        <div className="todo_icon2">
          <button className="icon_btn" onClick={removeTodo}>
            <MdRemoveCircleOutline
              style={{ color: "red", fontSize: "1.5rem" }}
            />
            <span className="tooltiptext">remove</span>
          </button>
        </div>

        <div className="todo_icon1">
          <button className="icon_btn" onClick={handleClick}>
            {isComplete ? (
              <BsFillCheckCircleFill
                style={{
                  color: "rgb(137, 137, 255)",
                  fontSize: "1.5rem",
                }}
              />
            ) : (
              <BsFillCheckCircleFill
                style={{
                  color: "grey",
                  fontSize: "1.5rem",
                }}
              />
            )}
            <span className="tooltiptext">complete</span>
          </button>
        </div>

        <div className="todo_title">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
