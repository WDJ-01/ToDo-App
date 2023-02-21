import React from "react";
import { CategoryColum } from "./components/categories/catergoryColum";
import { TodoSection } from "./components/todos/todoSection";
import './style.css'

function App() {
  return (
    <div className="App">
      <CategoryColum />
      <TodoSection />
    </div>
  );
}

export default App;
