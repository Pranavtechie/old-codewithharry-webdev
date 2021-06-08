// Any code which executes line by line is called sychronous code or blocking code
// In asynchronous or non-blocking code line by line execution can't be guaranteed as callbacks will fire

// synchrnous code for reading a file
/* const fs = require("fs");
let fileText = fs.readFileSync("dele.txt", "utf-8");
console.log(fileText); */

// asynchronous code for reading a file
const fs = require("fs");
// the callback function can passtwo arguments (error, data) : data contains the contents of the file
fs.readFile("dele.txt", "utf-8", (error, data) => {
  console.log("The data in the file is :", data);
});
console.log("This line is printed before the text of the file is printed");
