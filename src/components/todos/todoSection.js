import React from "react";
import "./todo.css";
import { TodoCard } from "./todoCard";
import { Form } from "./form";
import { useSelector } from "react-redux";

export const TodoSection = () => {
  const todoToDisplay = useSelector((state) => state.todoToDisplay);


  return (
    <>
      <section className="todos">
        <Form />
        <div className="todos_child">
          {todoToDisplay.map((item) => (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              completed={item.completed}
            />
          ))}
        </div>
      </section>
    </>
  );
};
