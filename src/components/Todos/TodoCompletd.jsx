import React from "react";

function TodoCompletd({ todos }) {

  const completedTodos = todos.filter((task) => task.isCompleted)

  const newTodo = completedTodos.map((task) => (
    <li key={task.id}>{task.text}</li>
  ));

  console.log(todos);

  return <ul className="liste-completed">{newTodo}</ul>;
}

export default TodoCompletd;
