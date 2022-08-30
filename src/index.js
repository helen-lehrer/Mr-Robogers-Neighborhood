import countUp from './scripts.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//UI Logic
function resetSubmission() {
  const oldResult = document.querySelector("p");
  if (oldResult) {
    oldResult.remove();
    outputArray = [];
  } 
}

function handleFormSubmission(event) {
  event.preventDefault();
  resetSubmission();
  
  const userInput = parseInt(document.getElementById("user-input").value);
  let outputArray = countUp(userInput);

  let outputArrayDisplay = outputArray.join(", ");
  const p = document.createElement("p");
  p.innerText = outputArrayDisplay;
  const div = document.createElement("div");
  div.append(p);
  p.setAttribute("class", "container");
  const existingDiv = document.getElementById("existing-div");
  existingDiv.after(div);
}

window.addEventListener("load", function () {
  const form = document.getElementById("i-input-form");
  form.addEventListener("submit", handleFormSubmission);
})
