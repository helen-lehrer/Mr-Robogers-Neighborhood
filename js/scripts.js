//Business Logic

const userInput= 5;
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

let joinedString = stringArray;
function joinString () {
  joinedString = stringArray.join(" ");
  return joinedString;
}

let beepedArray = joinedString;
function replaceDigits() {
  beepedArray = joinedString.replaceAll("1", "'Beep!'").replaceAll("2", "'Boop!'");
  return beepedArray;
}