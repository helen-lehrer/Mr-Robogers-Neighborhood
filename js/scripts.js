//Business Logic
function countUp(userInput) {
  let outputArray = [];
  for (let i = 0; i <= userInput; i++) {
    if (i.toString().includes('3')) {
      outputArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      outputArray.push("Boop!");
    } else if (i.toString().includes('1')) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(i);
    }
  };
  return outputArray;
}

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



