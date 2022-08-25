//Business Logic
function countUp(userInput) {
  let outputArray = [];
  for (let i = 0; i <= userInput; i++) {
    
    outputArray.push(i);
  };
  return outputArray;
};

function replaceArray(countUp) {
  const substring1 = '1';
  const substring2 = '2';
  const substring3 = '3';
  let newArray = [];
  countUp.forEach(function (number) {
    if (number.toString().includes(substring3)) {
      number = number.toString().replace(number, "Won't you be my neighbor?");
      newArray.push(number);
    } else if (number.toString().includes(substring2)) {
      number = number.toString().replace(number, "Boop!");
      newArray.push(number);
    } else if (number.toString().includes(substring1)) {
      number = number.toString().replace(number, "Beep!");
      newArray.push(number);
    } else {
      newArray.push(number);
    }
    });
  return newArray;
};

//UI Logic

function resetSubmission() {
  const oldResult = document.querySelector("p");
  if (oldResult) {
    oldResult.remove();
    outputArray = [];
  } 
};

function handleFormSubmission(event) {
  event.preventDefault();
  resetSubmission();
  
  const userInput = document.getElementById("user-input").value;
  let outputArray = countUp(userInput);
  let newArray = replaceArray(outputArray);

  let newArrayValue = newArray.join(", ");
  const p = document.createElement("p");
  p.innerText = newArrayValue;
  const div = document.createElement("div");
  div.append(p);
  p.setAttribute("class", "container");
  const existingDiv = document.getElementById("existing-div");
  existingDiv.after(div);
}

window.addEventListener("load", function () {
  const form = document.getElementById("number-input-form");
  form.addEventListener("submit", handleFormSubmission);
});



