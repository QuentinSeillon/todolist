import React from "react";

function TodoCompletd({ todosCompleted }) {

  const newTodo = todosCompleted.map((task) => (
    <li key={task.id}>{task.text}</li>
  ));

  return <ul className="liste-completed">{newTodo}</ul>;
}

export default TodoCompletd;
