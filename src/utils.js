const fs = require("fs");
const path = require("path");
const PDFParser = require("pdf-parse");

async function getContent(filePath) {
  const ext = path.extname(filePath);
  console.log("ext", ext);
  if (ext === ".pdf") {
    return await readPdf(filePath);
  } else {
    return await readTxt(filePath);
  }
}

function readTxt(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    return null;
  }
}

// Function to extract text from PDF file
async function readPdf(filePath) {
  try {
    // Read the PDF file
    const dataBuffer = fs.readFileSync(filePath);

    // Parse the PDF data
    const pdfData = await PDFParser(dataBuffer);

    // Extract text content from the parsed PDF data
    const text = pdfData.text;

    return text;
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    return null;
  }
}

module.exports = {
  getContent,
  readTxt,
  readPdf,
};
