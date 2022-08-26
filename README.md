# Mr. Roboger's Neighborhood

**By: Helen Lehrer**  
**Date Created: 8/19/2022**

### [Link to Site](https://helen-lehrer.github.io/Mr-Robogers-Neighborhood/)
---
### Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
---

### Description

`Mr. Roboger's Neighborhood` is web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list: 
* `For numbers that contain a 1, all digits are replaced with "Beep!"`
* `For numbers that contain a 2, all digits are replaced with "Boop!"`
* `For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"`

These substitutions are written from least to most important. The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

This codebase uses loops, arrays, and branching logic. The user is able to enter a new number and see new results over and over again. Each element is printed in the list to the webpage.

---

### Setup/Installation Requirements

#### To access the code in a source code editor: 
```bash
$ git clone https://github.com/helen-lehrer/Mr-Robogers-Neighborhood
$ cd programming-language-suggester
$ code .
```
To use the application, simply preview index.html in your browser.

---
### Known Bugs
* none

---

### License
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

&copy; _Copyright 2022 Helen Lehrer_

---
### TDD
Describe: countUp()

Test: "It should return an array of numbers from 0 to the user's inputted number"\
Code: beepBoop(5);\
Expected Output: [0, 1, 2, 3, 4, 5]

-----

Describe: convertToString()

Test: "It should convert every number in the array to strings."\
Code: convertToString([0, 1, 2, 3, 4, 5]);\
Expected Output: ["0", "1", "2", "3", "4", "5"]

-----

Describe: replaceArray()

Test: "It should replace any digit that is 1 with "Beep!", 2 with "Boop!", and 3 with "Won't you be my neighbor?""\ 
Code: replaceDigits("0, 1, 2, 3, 4, 5")\
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5"

Test: "It should replace replace any number that contains 1 with "Beep!", contains 2 with "Boop!", and contains 3 with "Won't you be my neighbor?" The first substitution should apply unless the second does, and the same with the second and third."\
Code: replaceDigits("0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13")\
Expected Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?'"