import React, { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoCompletd from "./components/Todos/TodoCompletd";
import "./styles/app.css";
import { Icon } from "@iconify/react";

const tasksList = [
  {
    id: 1,
    text: "blablabla",
    isCompleted: false,
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

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilityTodoCompleted() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row gap-2">
        <div className="tasks">
          <h1>test</h1>
          <TodoForm getValue={getValue} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            toggleCompleted={toggleCompleted}
          />
          <button className="btn-tasks" onClick={toggleVisibilityTodoCompleted}>
            <Icon icon="material-symbols:arrow-right-rounded" />
          </button>
        </div>

        {/* Affiche la div uniquement quand je veux voir les tasks fini */}
        <div>
          {isVisible ? <TodoCompletd todos={todos} /> : "Vous n'avez pas encore achevé de task"}
        </div>
      </div>
    </div>
  );
}

export default App;
