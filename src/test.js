// const path = require("path");
// // const { readFile } = require("./utils");

// // const fileName = "ပုဂံခေတ်.pdf";
// // const documentsDir = path.join(__dirname, "../files/train");
// // const filePath = path.join(documentsDir, fileName);

// // async function test() {
// //   const text = await readFile(filePath);
// //   console.log("Extracted text:", text);
// // }

// // test();

// const { readPdfText } = require("pdf-text-reader");

// const fileName = "ပုဂံခေတ်.pdf";
// const documentsDir = path.join(__dirname, "../files/train");
// const filePath = path.join(documentsDir, fileName);

// async function main() {
//   const pdfText = await readPdfText({ url: filePath });
//   console.info(pdfText);
// }

// main();
const s1 = "ပုဂံမြို့ဟောင်းရှိ ပုဂံခေတ်မှ စေတီပုထိုးနှင့် ဘုရားကျောင်းများ။";
const s2 = "ပုဂံမိေဟာင္းှိ ပုဂံေခတ္မွ ေစတီပုထိုးှင့္ ဘုရားေကျာင္းမ်ား။";

// Mapping of characters from s2 to s1
const charMap = {
  "ြိ": "ြိ့",
  "္ွ": "ှ",
  "်း": "း",
  "ိ္": "ိ",
  "ို": "ိ",
  "့္": "့",
  "ြ့": "ြ",
  "ို့": "ိ့",
  // Add more mappings as needed
};

// Function to replace characters based on the mapping
function replaceCharacters(input, mapping) {
  let output = input;
  for (const [find, replace] of Object.entries(mapping)) {
    output = output.replace(new RegExp(find, "g"), replace);
  }
  return output;
}

// Replace characters in s2 based on the mapping
const result = replaceCharacters(s2, charMap);
console.log("s1", s1);
console.log("result", result);
console.log(result === s1); // Output: true
