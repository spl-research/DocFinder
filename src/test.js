const path = require("path");
const { getContent } = require("./utils");

const fileName = "မြန်မာနိုင်ငံ.pdf";
// const fileName = "English.pdf";
const documentsDir = path.join(__dirname, "../files/train");
const filePath = path.join(documentsDir, fileName);

async function test() {
  const text = await getContent(filePath);
  console.log("Extracted text:", text);
}

test();
