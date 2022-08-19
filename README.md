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

Test: "It should replace any digit that is 1 with "Beep!", 2 with "Boop!", and 3 with "Won't you be my neighbor?"" 
Code: replaceDigits("0, 1, 2, 3, 4, 5")
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5"

Test: "It should replace replace any number that contains 1 with "Beep!", contains 2 with "Boop!", and contains 3 with "Won't you be my neighbor?""
Code: replaceDigits("0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13")
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?'"