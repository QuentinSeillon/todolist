import React from "react";
import TodoItems from "./TodoItems";

function TodoList({ todos, setTodos, setTodosCompleted }) {
  function supprimerTask(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  function taskComplet(task) {
    const updatedTodos = todos.filter((todo) => todo.id !== task.id);
  
    setTodos(updatedTodos);
    
    setTodosCompleted((todosCompleted) => [...todosCompleted, task]);
  }

  

  const newTodo = todos.map((task) => (
    <TodoItems
      {...task}
      key={task.id}
      supprimerTask={supprimerTask}
      taskComplet={taskComplet}
    />
  ));

  return <ul>{newTodo}</ul>;
}

export default TodoList;
