import React, { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./styles/app.css";
import TodoCompletd from "./components/Todos/TodoCompletd";

const tasksList = [
  {
    id: 1,
    text: "blablabla",
  },
];

function App() {
  const [todos, setTodos] = useState(tasksList);

  const [todosCompleted, setTodosCompleted] = useState([]);

  function getValue(task) {
    setTodos((prevTodos) => [...prevTodos, task]);
  }

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibilityTodoCompleted() {
    setIsVisible(!isVisible);
  }


  return (
    <div className="d-flex flex-column">
      <div className="tasks">
        <h1>test</h1>
        <TodoForm getValue={getValue} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setTodosCompleted={setTodosCompleted}
        />
        <button onClick={toggleVisibilityTodoCompleted}>Affiche les tasks completé</button>
        {isVisible ? <TodoCompletd todosCompleted={todosCompleted} /> : ""}
      </div>
    </div>
  );
}

export default App;
