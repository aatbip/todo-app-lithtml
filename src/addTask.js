import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";


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

  taskList = {
    width: "100%",
    float: "left",
    backgroundColor: "#e6fff3",
  };

  buttomElement = {
    marginTop: "3em",
  };

  let tasks = [];

  const onClickEvent = () => {
    let newTask = document.querySelector(".task-input").value;

    const taskListHtml = document.querySelector(".task-list");

    taskListHtml.innerHTML = "";

    tasks = [...tasks, newTask];

    const tasksLi = tasks.map((task, i) => displayTask(task, i));
    tasksLi.map((li) => taskListHtml.appendChild(li));
  };

  const displayTask = (task, i) => {
    let li = document.createElement("li");

    // li.classList.add("current-task");
    li.style.marginBottom = "10px";
    li.style.listStyleType = "none";
    li.style.margin = "10px";
    li.style.fontSize = "15px";

    li.appendChild(document.createTextNode(task));

    li.setAttribute("id", i);
    const button = onCompleteTask(i, task);
    const removeTaskButton = onRemoveTask(i, task);
    const hr = document.createElement("hr");

    li.appendChild(button);
    li.appendChild(removeTaskButton);
    li.appendChild(hr);

    return li;
  };

  const onCompleteTask = (i, task) => {
    let button = document.createElement("button");
    button.innerHTML = "Completed!";
    button.style.display = "block";
    button.style.marginBottom = "5px";
    button.style.marginTop = "10px";

    button.addEventListener("click", () => {
      let currentTask = document.getElementById(`${i}`);
      currentTask.style.textDecoration = "line-through";

      tasks = tasks.filter((t) => t != task);
    });

    return button;
  };

  const onRemoveTask = (i, task) => {
    let completedButton = document.createElement("button");
    completedButton.innerHTML = "Delete task";
    completedButton.style.display = "inline-block";
    completedButton.style.marginBottom = "5px";
    // completedButton.style.marginLeft = "20px";

    completedButton.addEventListener("click", () => {
      let currentTask = document.getElementById(`${i}`);
      currentTask.remove();

      tasks = tasks.filter((t) => t != task);
    });

    return completedButton;
  };

  return html`
    <div style=${styleMap(addTaskContainer)}>
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
    </div>
    <ul class="task-list" style=${styleMap(taskList)}></ul>
    <div class="button-element" style=${styleMap(buttomElement)}></div>
  `;
};

export { addTask };
