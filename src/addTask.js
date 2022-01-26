import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";

import { displayTask } from "./displayTask.js";

const addTask = () => {
  addTaskContainer = {
    width: "80%",
    float: "left",
  };

  addButtonContainer = {
    width: "20%",
    float: "left",
  };

  addTaskInput = {
    width: "100%",
    height: "30px",
  };

  addTaskButton = {
    width: "100%",
    height: "36px",
  };

  let tasks = [];

  const onClickEvent = () => {
    let newTask = document.querySelector(".task-input").value;
    tasks.push(newTask);
  };

  return html` <div style=${styleMap(addTaskContainer)}>
      <input
        style=${styleMap(addTaskInput)}
        class="task-input"
        type="text"
        placeholder="Enter your new task"
      />
    </div>
    <div style=${styleMap(addButtonContainer)}>
      <button @click=${onClickEvent} style=${styleMap(addTaskButton)}>
        Add
      </button>
    </div>`;
};

export { addTask };
