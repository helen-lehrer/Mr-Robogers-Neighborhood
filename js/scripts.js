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

let replacedArray = stringArray;
function replaceDigits() {
  if (replacedArray.includeas("1")) {
    replacedArray.splice()
  }
  beepedArray = stringArray.replaceAll("1", "'Beep!'").replaceAll("2", "'Boop!'").replaceAll("3", "'Won't you be my neighbor?'");
  return beepedArray;
}

/*
let joinedString = stringArray;
function joinString () {
  joinedString = stringArray.join(" ");
  return joinedString;
}
*/
