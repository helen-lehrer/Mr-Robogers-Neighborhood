//Business Logic

const userInput= 5;
let arrayCount = [];
function beepBoop(userInput) {
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

function joinString () {
  stringArray = stringArray.join(" ");
  return stringArray;
}
/*
let stringArray = stringArray.join(" ");
function replaceDigits() {
arrayCount.forEach(function(number) {
  
})
}
*/