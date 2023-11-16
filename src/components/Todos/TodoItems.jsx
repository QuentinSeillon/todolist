import React, { useState } from "react";
import { Icon } from "@iconify/react";
import TodoUpdate from "./TodoUpdate";

function TodoItems({ text, id, supprimerTask, taskComplet }) {

  return (
    <li>
      {text}
      <button onClick={() => taskComplet({ id, text })}>
        <Icon icon="material-symbols:check-circle" />
      </button>
      <button onClick={() => supprimerTask(id)}>
        <Icon icon="material-symbols:cancel" />
      </button>
      <button>
        <Icon icon="material-symbols:settings" />
      </button>
    </li>
  );
}

export default TodoItems;
