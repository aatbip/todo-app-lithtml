import { render } from "lit-html";

import { addTask } from "./addTask.js"; 
import { displayTask } from "./displayTask.js";


render(addTask(), document.querySelector(".body-wrapper"));
// render(displayTask(), document.querySelector(".display-task-wrapper"));