import React from "react";
import { CategoryCard } from "./categoryCard";
import "./category.css";
import { useSelector } from "react-redux";
import { Form } from "./form";

export const CategoryColum = () => {
  const category = useSelector((state) => state.categoryList);
  

  return (
    <>
      <section className="category">
        <Form />
        <div className="category_child">
          {category.map(
            (item) => (
              console.log(item),
              (
                <CategoryCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  active={item.active}
                  
                />
              )
            )
          )}
        </div>
      </section>
    </>
  );
};
