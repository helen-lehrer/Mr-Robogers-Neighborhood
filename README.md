Describe: countUp()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

-----

Describe: convertToString()

Test: "It should convert every number in the array to strings."
Code: convertToString([0, 1, 2, 3, 4, 5]);
Expected Output: ["0", "1", "2", "3", "4", "5"]

-----

Describe: joinString()

Test: "It should concatenate all elements in the array into one single string." 
Code: joinString(["0", "1", "2", "3", "4", "5"])
Expected Output: "0, 1, 2, 3, 4, 5"

-----

Describe: replaceDigits()

Test: "It should replace any digit that is 1 with "Beep!"" 
Code: replaceDigits("0, 1, 2, 3, 4, 5")
Expected Output: "0, 'Beep!', 2, 3, 4, 5"

Test: "It should replace any digit that is 2 with "Boop!"" 
Code: replaceDigits("0, 1, 2, 3, 4, 5")
Expected Output: "0, 'Beep!', 'Boop!', 3, 4, 5"

Test: "It should replace any digit that is 3 with "Won't you be my neighbor?"" 
Code: replaceDigits("0, 1, 2, 3, 4, 5")
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5"