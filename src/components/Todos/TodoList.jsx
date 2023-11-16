import React from "react";
import TodoItems from "./TodoItems";

function TodoList({ todos, setTodos,toggleCompleted }) {

  console.log(todos);

  function supprimerTask(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  const incompletedTodos = todos.filter((task) => !task.isCompleted)

  return (
    <ul>
      {incompletedTodos.map((task) => (
        <TodoItems
          {...task}
          key={task.id}
          supprimerTask={supprimerTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  )
}

export default TodoList;
