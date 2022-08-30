export default function countUp(userInput) {
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



/*export default function countUp(userInput) {
let outputArray = [];
  return outputArray;

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
}*/
