import React, { useState } from "react";
import $ from "jquery";
import "./todo.css";
import { TodoCard } from "./todoCard";
import { Form } from "./form";
import { useSelector } from "react-redux";
import { GrAdd } from "react-icons/gr";

export const TodoSection = () => {
  const [showForm, setShowForm] = useState(false);

  const todoToDisplay = useSelector((state) => state.todoToDisplay);
  const onClick = () => {
    if (showForm === false) {
      setShowForm(true);
    } else setShowForm(false);
  };
  return (
    <>
      <section className="todos">
        <div className="todoHead">
          <h1 className="todo_h1">Todos</h1>
          <button className="display_btn" onClick={onClick}>
            <div className="create_todo">
              <GrAdd style={{marginRight: '.5rem'}}/>
              Create Todo
            </div>
          </button>
        </div>
        <Form showForm={showForm} onClick={onClick} />
        <div className="todos_child">
          {todoToDisplay.map((item) => (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};
