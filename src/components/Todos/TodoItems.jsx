import React, { useState } from "react";
import { Icon } from "@iconify/react";

function TodoItems({ text, id, supprimerTask, toggleCompleted }) {

  function completed() {
    toggleCompleted(id);
  }

  return (
    <li>
      {text}
      <button onClick={completed}>
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
