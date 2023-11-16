import React, { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./styles/app.css";

const tasksList = [
  {
    id: 1,
    text: "blablabla",
    isCompleted: false
  },
];

function App() {
  const [todos, setTodos] = useState(tasksList);

  function getValue(task) {
    setTodos((prevTodos) => [...prevTodos, task]);
  }

  function toggleCompleted(taskId) {
    setTodos((prevTodos) =>
      prevTodos.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }


  return (
    <div className="d-flex flex-column">
      <div className="tasks">
        <h1>test</h1>
        <TodoForm getValue={getValue} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
