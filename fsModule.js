const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(err, data);
}); // This is a call back function so it is running later

fs.writeFile("file2.txt", "This is asecond file", () => {
  console.log("writtent data");
});

console.log("Finished reading file"); // And it is running first
