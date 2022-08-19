//Business Logic
function submitForm(event) {
  event.preventDefault();
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

  let newArray = [];
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

  function publishAnswer() {
    const p = document.getElementById("answer");
    p.innerText = newArray.join(" ");
  };
  publishAnswer();
};
//UI Logic

window.addEventListener("load", function () {
  const form = document.getElementById("number-input-form");
  form.addEventListener("submit", submitForm);
});



