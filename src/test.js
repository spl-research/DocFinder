const fs = require("fs");
const path = require("path");

// const fileName =  "Myanmar.pdf";
const fileName = "English.pdf";
const documentsDir = path.join(__dirname, "../files/train");
const filePath = path.join(documentsDir, fileName);
const content = fs.readFileSync(filePath, "utf8");

console.log("content", content);
