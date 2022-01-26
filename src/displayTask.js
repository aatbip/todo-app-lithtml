import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";


const displayTask = (tasks) => {
  console.log(tasks); 
  html` ${tasks.map((item) => html`<li>${item}</li>`)} `;
};

export { displayTask };
