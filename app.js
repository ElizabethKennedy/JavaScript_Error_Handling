"use strict";
//Exercise 1: Enable Strict Mode

console.log("Exercise 2: Using Try/Catch\n==========\n");
console.log("Exercise 3: Function Syntax Debugging\n==========\n");
//Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to attempt to convert 'data' to JSON
  try {
    console.log(data)
    return JSON.parse(data); 
  } catch (err) {
    // TODO: if an exception is raised, print the error to the console and return null
    console.log(`error: ${err}`)
    alert("Cannot parse data to JSON");
    return null;
  }  
}
let failData = ("Hello JS Error Handling!")

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
