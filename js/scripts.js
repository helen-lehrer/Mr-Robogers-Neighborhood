//Business Logic
let newArray = [];
function beepBoop() {
    const userInput = document.getElementById("user-input").value;
    let arrayCount = [];
    function countUp(userInput) {
      for (let i = 0; i <= userInput; i++) {
        arrayCount.push(i);
      };
    };
    countUp(userInput);

    let stringArray = arrayCount;
    function convertToString() {
      stringArray = arrayCount.map(function(number) {
      return String(number);
    }); 
    };
    convertToString();

    function replaceArray() {
    const substring1 = '1';
    const substring2 = '2';
    const substring3 = '3';
    stringArray.forEach(function (number) {
      if (number.includes(substring3)) {
        number = number.replace(number, "Won't you be my neighbor?");
        newArray.push(number);
      } else if (number.includes(substring2)) {
        number = number.replace(number, "Boop!");
        newArray.push(number);
      } else if (number.includes(substring1)) {
        number = number.replace(number, "Beep!");
        newArray.push(number);
      } else {
        newArray.push(number);
      }
      });
    };
    replaceArray();
    return newArray;
};

//UI Logic

function resetSubmission() {
  const oldResult = document.querySelector("p");
  if (oldResult === null) {

  } else if (oldResult.value = document.querySelector("p")) {
    oldResult.remove();
    newArray = [];
}
};

function handleFormSubmission(event) {
  event.preventDefault();
  resetSubmission();
  beepBoop();
  let newArrayValue = newArray.join(", ");
  const newParagraph = document.createElement("p");
  newParagraph.innerText = newArrayValue;
  const currentParagraph = document.getElementById("p1");
  document.body.insertBefore(newParagraph, currentParagraph);
  newParagraph.setAttribute("class", "container"); 
}

window.addEventListener("load", function () {
  const form = document.getElementById("number-input-form");
  form.addEventListener("submit", handleFormSubmission);
});



