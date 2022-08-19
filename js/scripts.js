//Business Logic

const userInput= 20;
let arrayCount = [];
function countUp(userInput) {
for (let i = 0; i <= userInput; i++) {
  arrayCount.push(i);
};
};

let stringArray = arrayCount;
function convertToString () {
  stringArray = arrayCount.map(function(number) {
  return String(number);
}); 
};

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
}

