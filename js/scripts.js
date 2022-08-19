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

const substring1 = '1';
const substring2 = '2';
const substring3 = '3';
let replacedArray = stringArray;
function replaceArray() {
replacedArray.forEach(function (number) {
  if (number.includes(substring1)) {
    return true;
  } else if (number.includes(substring2)) {
    return true;
  } else if (number.includes(substring3)) {
    return true;
  }
  });
}
/*
const match = stringArray.find(function(number) {
  if 
})

let replacedArray = stringArray;
let newArray = [];
function replaceDigits() {
  replacedArray.forEach(function (number) {
    if (number.includes("3")) {
      number = "Won't you be my neighbor?";
    } else if (number.includes("2")) {
      number.replace("Boop!");
    } else if (number.includes("1")) {
      number.replace("Beep!");
    }
  });
}
*/
  /*
  if (replacedArray.includeas("1")) {
    replacedArray.splice()
  }
  beepedArray = stringArray.replaceAll("1", "'Beep!'").replaceAll("2", "'Boop!'").replaceAll("3", "'Won't you be my neighbor?'");
  return beepedArray;
  */

/*
let joinedString = stringArray;
function joinString () {
  joinedString = stringArray.join(" ");
  return joinedString;
}
*/
