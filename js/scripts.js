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

/*
function replaceDigits() {
arrayCount.toString();
arrayCount.forEach(function(number) {
  if (number )
})
}
*/